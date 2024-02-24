import  BaseContext from '../Context.js'
import { Generator } from '@abw/react-context'
import { BLUR, FOCUS } from '../Constants.jsx'
import { callFunctions, lengthEmpty } from '../Utils.js'
import { createRef } from 'react'
import { doNothing, isObject, isString } from '@abw/badger-utils'
import { fieldDefaultProperties } from '../Config.js'
import { newFieldStatus } from '../Status.js'

class FieldContext extends BaseContext {
  static newStatus    = newFieldStatus
  static debug        = false
  static debugPrefix  = props => `Field [${props.name}] > `
  static debugColor   = 'teal'
  static actions      = [
    // 'set',
    'onFocus', 'onBlur', 'onChange',
    'setFocus', 'setValue', 'setValid', 'setInvalid', 'reset',
    // 'setStatus',
    'setResetState', 'setChangedState',
    'setValidatingState', 'setValidState', 'setInvalidState',
    'setFocusState', 'setBlurState',
  ]
  constructor(props) {
    super(props)
    this.name = props.name

    const { value } = props
    const initialValue = value

    this.form = this.props.form
    this.state = {
      ...this.state,
      initialValue,
      value,
      error: null
    }
    this.debug('initial state:', this.state)

    this.inputRef = createRef()
    this.resetRef = createRef()

    this.on = {
      load:    this.contextFunction(this.props.onLoad),
      focus:   this.contextFunction(this.props.onFocus),
      blur:    this.contextFunction(this.props.onBlur),
      change:  this.contextFunction(this.props.onChange),
      valid:   this.contextFunction(this.props.onValid),
      invalid: this.contextFunction(this.props.onInvalid),
    }
    this.on.load()
    // if (this.props.onLoad) {
    // this.props.onLoad(this)
    // }
  }
  contextFunction(fn) {
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
  setFocusState(state, callback) {
    return this.setStatus(FOCUS, state, callback)
  }
  setBlurState(state, callback) {
    return this.setStatus(BLUR, state, callback)
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
  setFocus(e) {
    e?.preventDefault()
    // imperatively focus
    this.inputRef?.current?.focus()
  }

  //--------------------------------------------------------------------------
  // Change and reset
  //--------------------------------------------------------------------------
  onChange(input) {
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
  setValue(value, event) {
    event?.preventDefault()
    this.onChange(value)
    // JFDI - set the value, no side-effects
    // this.setState({ value })
  }
  reset(e) {
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

  validation(callback) {
    this.validate(callback).then(doNothing).catch(doNothing)
  }
  validate(callback) {
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
  validator() {
    return async (resolve, reject) => {
      const { value='' } = this.state
      const {
        validate, required, requiredMessage, validMessage,
      } = { ...fieldDefaultProperties, ...this.props }
      const [ , empty] = lengthEmpty(value)

      // let validate = validateOnChange || (validateOnInvalid && invalid)
      //if (length < minValidateLength && ! invalid) {
      //  this.debug(`length of ${this.name} field is less than minValidateLength`)
      //  resolve({ message: '' })
      //}
      this.setValidatingState()

      if (validate) {
        // if there's a validate property then we run it
        return await this.validateValidator(
          resolve, reject, validate, validMessage
        )
      }
      else if (empty) {
        return await this.validateEmpty(
          resolve, reject, required, validMessage, requiredMessage
        )
      }
      else {
        this.debug('no validation defined')
        resolve({ value, message: validMessage })
      }
    }
  }
  async validateValidator(resolve, reject, validate, validMessage) {
    this.debug('calling validate function')
    const field = this.getContext()
    try {
      this.debug(`calling validate function with value [${field.value}]`)
      const value = await validate(field.value, field, resolve, reject)
      this.debug('validate function passed:', value)
      resolve(
        isObject(value)
          ? { message: validMessage, ...value }
          : { value, message: validMessage }
      )
    }
    catch (err) {
      this.debug('validate threw an error:', err)
      const message = isString(err)
        ? err
        : err.message
      this.debug('rejecting with message:', message)
      reject({ message })
    }
  }
  validateEmpty(resolve, reject, required, validMessage, invalidMessage) {
    if (required) {
      this.debug('failing validation - required field is empty')
      reject({ message: invalidMessage })
    }
    else {
      this.debug('passing validation - value is empty but not required')
      resolve({ message: validMessage })
    }
  }

  setValid(message, e) {
    e?.preventDefault()
    this.setValidState({ message }, this.on.valid)
  }
  setInvalid(message, e) {
    e?.preventDefault()
    this.setInvalidState({ message }, this.on.invalid)
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
      ...fieldDefaultProperties,
      ...this.props,
      ...this.state,
      ...this.actions,
      name:     this.name,
      inputRef: this.inputRef,
      resetRef: this.resetRef,
      setRef:   this.resetRef,      // OLD name
    }
    delete context.form
    delete context.children
    delete context.render
    return context
  }
}

const generated = Generator(FieldContext)
export const { Context, Provider, Consumer, Children, Use: useField } = generated
export default generated