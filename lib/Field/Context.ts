import { createRef } from 'react'
import { FormRenderProps } from '../Form/types'
import { fieldStatusSets } from '../Status'
import { callFunctions, lengthEmpty } from '../Utils'
import { EventWithPreventDefault, FieldStatusChange, StateCallback } from '../types'
import { fieldDefaults, fieldModelDefaults } from './defaults'
import { doNothing, isFunction, isObject, isString } from '@abw/badger-utils'
import { Generator, Context as BaseContext, WithRequiredFrom } from '@abw/react-context'
import {
  BLUR, CHANGED, DISABLED, ENABLED, FOCUS, INVALID, RESET, RESET_DISABLED,
  UNVALIDATED, VALID, VALIDATING
} from '../Constants'
import {
  AddFieldState, AddFieldStateFn, FieldActions, FieldConstructorProps,
  FieldContextFunction, FieldOnHandler, FieldOnHandlers, FieldProps,
  FieldContextItems, FieldResetter, FieldState, FieldValidateFunction,
  FieldValidateReject, FieldValidateResolve, FieldValidateResultObject,
  FieldValidator, FieldValue, InputType, UseFieldWith
} from './types'

export class FieldContext extends BaseContext<
  FieldProps,
  FieldState,
  FieldActions,
  FieldContextItems
> {
  // static newStatus    = newFieldStatus
  static debug        = false
  static debugPrefix  = `Field > `// props => `Field [${props.name}] > `
  static debugColor   = 'teal'
  static actions      = [
    'onFocus',
    'onBlur',
    'onChange',
    'setFocus',
    'setValue',
    'setValid',
    'setInvalid',
    'reset',
    'setResetState',
    'setChangedState',
    'setValidatingState',
    'setValidState',
    'setInvalidState',
    'setFocusState',
    'setBlurState',
    'setDisabledState',
    'setEnabledState',
  ]

  form: FormRenderProps
  name: string
  mounted?: boolean
  on: FieldOnHandlers
  // TODO: this doesn't work with TextArea
  inputRef: React.RefObject<InputType>
  resetRef: React.RefObject<FieldResetter>

  config: WithRequiredFrom<
    FieldProps,
    typeof fieldModelDefaults
  >

  constructor(
    props: FieldConstructorProps
  ) {
    super(props)
    this.config = {
      ...fieldDefaults,
      ...props
    }

    this.name = props.name

    const { value } = props
    const initialValue = value

    this.form = this.props.form
    this.state = {
      ...this.state,
      initialValue,
      status: props.disabled
        ? fieldStatusSets.resetDisabled
        : fieldStatusSets.reset,
      value,
      error: null
    }
    this.debug('initial state:', this.state)

    this.inputRef = createRef<InputType>()
    this.resetRef = createRef()

    this.on = {
      load:       this.contextFunction(this.props.onLoad),
      focus:      this.contextFunction(this.props.onFocus),
      blur:       this.contextFunction(this.props.onBlur),
      change:     this.contextFunction(this.props.onChange),
      valid:      this.contextFunction(this.props.onValid),
      invalid:    this.contextFunction(this.props.onInvalid),
      unvalidate: this.contextFunction(this.props.onUnvalidate),
      reset:      this.contextFunction(this.props.onReset),
    }
    this.on.load()
    // if (this.props.onLoad) {
    // this.props.onLoad(this)
    // }
  }
  contextFunction(fn?: FieldContextFunction) : FieldOnHandler {
    return fn
      ? () => fn(this.getContext())
      : doNothing
  }
  componentDidMount() {
    this.debug('componentDidMount')
    this.mounted = true
    this.form.attachField(this.props.name, this)
  }
  componentWillUnmount() {
    this.debug('componentWillUnmount')
    this.mounted = false
    this.form.detachField(this.props.name)
  }

  //--------------------------------------------------------------------------
  // Status
  //--------------------------------------------------------------------------
  setStatus(
    status: FieldStatusChange,
    addState: AddFieldState = {},
    callback: StateCallback = doNothing
  ) {
    if (! this.mounted) {
      return
    }
    this.setState(
      oldState => ({
        ...(
          isFunction<AddFieldStateFn>(addState)
            ? addState(oldState) as FieldState
            : addState as FieldState
        ),
        status: {
          ...oldState.status,
          ...(fieldStatusSets[status] || { [status]: true })
        }
      }),
      callback
    )
  }
  setChangedState(state?: AddFieldState, callback?: StateCallback) {
    this.setStatus(CHANGED, state, callback)
  }
  setValidatingState(state?: AddFieldState, callback?: StateCallback) {
    this.setStatus(VALIDATING, state, callback)
  }
  setInvalidState(state?: AddFieldState, callback?: StateCallback) {
    this.setStatus(INVALID, state, callback)
  }
  setValidState(state?: AddFieldState, callback?: StateCallback) {
    this.setStatus(VALID, state, callback)
  }
  setUnvalidatedState(state?: AddFieldState, callback?: StateCallback) {
    this.setStatus(UNVALIDATED, state, callback)
  }
  setFocusState(state?: AddFieldState, callback?: StateCallback) {
    this.setStatus(FOCUS, state, callback)
  }
  setBlurState(state?: AddFieldState, callback?: StateCallback) {
    this.setStatus(BLUR, state, callback)
  }
  setDisabledState(state?: AddFieldState, callback?: StateCallback) {
    this.setStatus(DISABLED, state, callback)
  }
  setEnabledState(state?: AddFieldState, callback?: StateCallback) {
    this.setStatus(ENABLED, state, callback)
  }
  setResetState(state?: AddFieldState, callback?: StateCallback) {
    this.setStatus(
      this.props.disabled
        ? RESET_DISABLED
        : RESET,
      state, callback
    )
  }

  onFocus() {
    this.setFocusState(
      { },
      this.on.focus
    )
  }
  onBlur() {
    this.setBlurState(
      { },
      this.props.validateOnBlur
        ? () => this.validation(this.on.blur)
        : this.on.blur
    )
  }
  setFocus(e?: EventWithPreventDefault) {
    e?.preventDefault()
    // imperatively focus
    this.inputRef?.current?.focus()
  }

  //--------------------------------------------------------------------------
  // Change and reset
  //--------------------------------------------------------------------------
  onChange(input: FieldValue) {
    this.debug(`onChange(${input})`)
    const value = this.props.prepareValue
      ? this.props.prepareValue(input)
      : input
    const { invalid } = this.state.status
    const {
      validateOnChange, validateOnInvalid=true, minValidateLength=1
    } = this.props
    const [length] = lengthEmpty(value)
    let validate = validateOnChange || (validateOnInvalid && invalid)

    // don't validate if it's a short input < minValidateLength
    // NO, this is wrong - we need to revalidate if we had an invalid input
    // (e.g. length > maxLength) and then we've backspace to bring it back
    // in line, or if we had a valid/invalid message when the length was
    // over the threshold and we've backspaced to bring it back under
    if (length < minValidateLength && ! invalid) {
      validate = false
    }

    this.setChangedState(
      { value },
      () => {
        this.form.setValue(this.props.name, value)
        if (validate) {
          this.validation(this.on.change)
        }
        else {
          this.on.change()
        }
      }
    )
  }
  getValue() {
    return this.state.value
  }

  setValue(value: FieldValue, event?: EventWithPreventDefault) {
    event?.preventDefault()
    this.onChange(value)
    // JFDI - set the value, no side-effects
    // this.setState({ value })
  }

  reset(e?: EventWithPreventDefault) {
    e?.preventDefault()
    const value = this.props.prepareValue
      ? this.props.prepareValue(this.state.initialValue)
      : this.state.initialValue
    this.debug(`reset initialValue:${this.state.initialValue} => ${value}`)
    this.form.setValue(this.props.name, value)
    this.setResetState(
      { value, message: this.props.message },
      () => this.resetRef?.current?.reset()
    )
    return value
  }

  validation(callback?: VoidFunction) {
    this.validate(callback).then(doNothing).catch(doNothing)
  }

  async validate(callback?: VoidFunction): Promise<FieldValidateResultObject> {
    this.debug('validate()')
    const result = {
      name:  this.name,
      label: this.props.label
    }
    return new Promise( this.validator() )
      .then(
        state => {
          this.debug('validate() passed:', state)
          this.setValidState(
            state,
            callFunctions(this.on.valid, callback)
          )
          return {
            ...result,
            ...state
          }
        }
      )
      .catch(
        state => {
          this.debug('validate() failed:', state)
          this.setInvalidState(
            state,
            callFunctions(this.on.invalid, callback)
          )
          throw {
            ...result,
            ...state
          }
        }
      )
  }
  validator(): FieldValidator {
    return async (resolve, reject) => {
      const { value='' } = this.state
      const {
        validate, required, optional, requiredMessage, validMessage,
      } = this.config
      // } = { ...fieldDefaults, ...this.props }
      const [ , empty] = lengthEmpty(value)

      // let validate = validateOnChange || (validateOnInvalid && invalid)
      //if (length < minValidateLength && ! invalid) {
      //  this.debug(`length of ${this.name} field is less than minValidateLength`)
      //  resolve({ message: '' })
      //}
      this.setValidatingState()

      if (validate) {
        // if the field is optional then an empty value is OK and we don't
        // need to run the validation.
        if (empty && optional) {
          this.debug('optional field is empty')
          return resolve({ value, message: validMessage })
        }
        // if there's a validate property then we run it
        return await this.validateValidator(
          resolve, reject, validate, validMessage
        )
      }
      else if (empty) {
        return this.validateEmpty(
          resolve, reject, required, validMessage, requiredMessage
        )
      }
      else {
        this.debug('no validation defined')
        resolve({ value, message: validMessage })
      }
    }
  }
  async validateValidator(
    resolve: FieldValidateResolve,
    reject: FieldValidateReject,
    validate: FieldValidateFunction,
    validMessage?: string | null
  ) {
    this.debug('calling validate function')
    const field = this.getContext()
    try {
      this.debug(`calling validate function with value [${field.value}]`)
      // The validate() function can have a void return type, to handle the
      // case where it calls either the resolve or reject functions and
      // doesn't return a value.  In which case, this code following the call
      // to validate() is never reached.  However, that means that someone
      // could write a "type safe" function which DOESN'T call resolve or
      // reject and doesn't return any value.  So we need the extra guard to
      // default the value back to being the field.value.  Partly to keep
      // typescript happy, but also to help us sleep well at night.
      const value = await validate(field.value, field, resolve, reject)
        ?? field.value
      this.debug('validate function passed:', value)
      resolve(
        isObject(value)
          ? { message: validMessage, ...value }
          : { value, message: validMessage }
      )
    }
    catch (err: unknown) {
      this.debug('validate threw an error:', err)
      const message = isString(err)
        ? err
        : (err as Error).message
      this.debug('rejecting with message:', message)
      reject({ message })
    }
  }
  validateEmpty(
    resolve: FieldValidateResolve,
    reject: FieldValidateReject,
    required?: boolean,
    validMessage?: string | null,
    invalidMessage?: string | null
  ) {
    if (required) {
      this.debug('failing validation - required field is empty')
      reject({ message: invalidMessage })
    }
    else {
      this.debug('passing validation - value is empty but not required')
      resolve({ message: validMessage })
    }
  }

  setValid(message?: string, e?: EventWithPreventDefault) {
    e?.preventDefault()
    this.setValidState({ message }, this.on.valid)
  }
  setInvalid(message?: string, e?: EventWithPreventDefault) {
    e?.preventDefault()
    this.setInvalidState({ message }, this.on.invalid)
  }
  unvalidate() {
    this.setUnvalidatedState(
      { message: this.props.message },
    )
  }

  /*
  setRef(r) {
    // used to store a reference to an input component so that we can reset it
    // if the server-side form validation fails (e.g. in the case of recaptcha)
    // where the user must perform the "I'm not a robot" check again.
    this.ref = r
  }
  OLDset(input) {
    const value = this.props.prepareValue
      ? this.props.prepareValue(input)
      : input
    // TODO: validate on change
    this.setChangedState(
      { value },
      () => this.form.setValue(this.props.name, value)
    )
  }
  */

  getContext() {
    const context = {
      // ...fieldDefaultProperties,
      // ...this.props,
      ...this.config,
      ...this.state,
      ...this.actions,
      // name:     this.name,
      inputRef: this.inputRef,
      resetRef: this.resetRef,
      // setRef:   this.resetRef,      // OLD name
    }
    // @ts-expect-error: The operand of a 'delete' operator must be optional.ts(2790)
    delete context.form
    // @ts-expect-error: Property 'children' does not exist on type
    delete context.children
    // @ts-expect-error: Property 'render' does not exist on type
    delete context.render
    return context
  }
}

const generated = Generator(FieldContext)

export const {
  Context,
  Provider,
  Consumer,
  Children,
  Use
} = generated

export const useField = <MoreItems=object>(): UseFieldWith<MoreItems> =>
  Use() as UseFieldWith<MoreItems>

export default generated