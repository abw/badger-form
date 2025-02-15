// import BaseContext from '../Context.js'
import { FieldContext } from '../Field/Context'
import { formStatusSets } from '../Status.js'
import { formModelDefaults } from './defaults'
import { formFieldProperties } from '../Config.js'
import { FieldValidateResultObject, FieldValue, FieldValues } from '../Field/types.js'
import { callFunctions, stringToObject } from '../Utils.js'
import { EventWithPreventDefault, FormStatusChange, StateCallback } from '../types.js'
import {
  Generator, Context as BaseContext, WithRequiredFrom
} from '@abw/react-context'
import {
  doNothing, extract, isArray, isFunction, isObject, isString,
  noValue
} from '@abw/badger-utils'
import {
  CHANGED, FULFILLED, INVALID, RESET, SUBMITTED, SUBMITTING,
  UNVALIDATED, VALID, VALIDATING
} from '../Constants.js'
import {
  AddFormState, AddFormStateFn, FieldSchema, FormActions, FormConstructorProps,
  FormErrorObjectItem, FormProps, FormRenderProps, FormState, FormSubmitData,
  FormSubmitError, FormSubmitResponse, FormValidator, FormValidatorResults
} from './types.js'
// import { formModelDefaults } from './defaults.js'

export class FormObject extends BaseContext<
  FormProps,
  FormState,
  FormActions,
  FormRenderProps
> {
  // static newStatus    = newFormStatus
  static debug        = false
  static debugPrefix  = 'Form > '
  static debugColor   = 'rebeccapurple'
  static actions      = [
    'fieldSpec', 'attachField', 'detachField',
    'setFocus',
    'reset',
    'validate', 'unvalidate',
    'submit',
    'setValue', 'setValues', 'setHidden',
    // should this be kept internal?
    'setStatus',
    'setResetState',
    'setChangedState',
    'setValidatingState',
    'setValidState',
    'setInvalidState',
    'setUnvalidatedState',
    'setSubmittingState',
    'setSubmittedState',
    'handleError'
  ]

  mounted?: boolean
  fields: Record<string, FieldContext>
  config: WithRequiredFrom<
    FormProps,
    typeof formModelDefaults
  >

  constructor(
    props: FormConstructorProps
  ) {
    super(props)
    this.config = {
      ...formModelDefaults,
      ...props
    }
    this.fields = { }

    const {
      // fields={ },
      hidden={ }
    } = props
    const initialValues = { ...hidden }
    const defaults = {
      ...formModelDefaults,
      ...this.props,
    }

    this.state = {
      // ...formDefaultProperties,
      ...defaults,
      ...this.state,
      initialValues,
      status: formStatusSets.reset,
      values: { ...initialValues },
      errors: [ ],
      error: null
    }

    if (this.props.onLoad) {
      this.props.onLoad(this)
    }
  }
  componentDidMount() {
    this.debug('componentDidMount()')
    this.mounted = true
  }
  componentWillUnmount() {
    this.debug('componentWillUnmount()')
    this.mounted = false
  }

  //--------------------------------------------------------------------------
  // Status
  //--------------------------------------------------------------------------
  setStatus(
    status: FormStatusChange,
    addState: AddFormState = {},
    callback: StateCallback = doNothing
  ) {
    if (! this.mounted) {
      return
    }
    this.setState(
      oldState => ({
        ...(
          isFunction<AddFormStateFn>(addState)
            ? addState(oldState) as FormState   // Annoyingly required because
            : addState as FormState             // Partial<...> allows undefined
        ),
        status: {
          ...oldState.status,
          ...(formStatusSets[status] || { [status]: true })
        },
      }),
      callback
    )
  }
  setResetState(state?: AddFormState, callback?: StateCallback) {
    this.setStatus(RESET, state, callback)
  }
  setChangedState(state?: AddFormState, callback?: StateCallback) {
    this.setStatus(CHANGED, state, callback)
  }
  setValidatingState(state?: AddFormState, callback?: StateCallback) {
    this.setStatus(VALIDATING, state, callback)
  }
  setInvalidState(state?: AddFormState, callback?: StateCallback) {
    this.setStatus(INVALID, state, callback)
  }
  setValidState(state?: AddFormState, callback?: StateCallback) {
    this.setStatus(VALID, state, callback)
  }
  setUnvalidatedState(state?: AddFormState, callback?: StateCallback) {
    this.setStatus(UNVALIDATED, state, callback)
  }
  setSubmittingState(state?: AddFormState, callback?: StateCallback) {
    this.setStatus(SUBMITTING, state, callback)
  }
  setSubmittedState(state?: AddFormState, callback?: StateCallback) {
    this.setStatus(SUBMITTED, state, callback)
  }

  // Fields
  fieldSpec(name: string, props: FieldSchema) {
    const defaults = this.props.fields?.[name] ?? { }
    const value    = props.value ?? this.props.values?.[name]
    return {
      name,
      ...extract(this.props, formFieldProperties),
      ...defaults,
      ...props,
      value
    }
  }
  attachField(name: string, field: FieldContext) {
    this.debug(`attaching ${name} field`)
    this.fields[name] = field
    this.setState(
      state => ({
        values: {
          ...state.values,
          [name]: field.getValue()
        }
      })
    )
  }
  detachField(name: string) {
    this.debug(`detaching ${name} field`)
    delete this.fields[name]
  }


  //--------------------------------------------------------------------------
  // Field focus
  //--------------------------------------------------------------------------
  setFocus(name: string, event?: EventWithPreventDefault) {
    event?.preventDefault()
    this.fields[name]?.setFocus()
  }

  //--------------------------------------------------------------------------
  // Set/Reset
  //--------------------------------------------------------------------------
  reset(e?: EventWithPreventDefault) {
    if (! this.mounted) {
      return
    }
    this.debug('reset()')
    e?.preventDefault()
    this.resetFields()
    this.setResetState(
      {
        errors: [ ],
        error: null,
      },
      this.props.onReset
    )
  }
  resetFields() {
    this.debug('resetFields()')
    Object.values(this.fields).forEach(
      field => field.reset()
    )
  }
  setValue(name: string, value: FieldValue) {
    // JFDI - called by fields when they change
    this.debug(`setValue(${name}, ${value})`)
    this.setChangedState(
      state => ({
        ...state,
        values: {
          ...state.values,
          [name]: value
        }
      })
    )
  }
  setValues(values: FieldValues, event?: EventWithPreventDefault) {
    this.debug('setValues():', values)
    event?.preventDefault()
    Object.entries(values).forEach(
      ([name, value]) => this.fields[name]?.setValue(value)
    )
  }
  setHidden(values: FieldValues) {
    const hidden = {
      ...this.state.hidden,
      ...values
    }
    this.setState({ hidden })
  }

  //--------------------------------------------------------------------------
  // Submit
  //--------------------------------------------------------------------------
  submit(event?: EventWithPreventDefault) {
    this.debug('submit()')
    event?.preventDefault()
    this.validate()
      .then( submit => this.handleSubmit(submit) )
      .catch( submit => this.debug('Form is NOT valid:', submit) )
  }

  async validate(): Promise<FormSubmitData> {
    this.debug('validate()')
    this.setValidatingState()

    return new Promise<FormSubmitData>( this.validator() )
      .then(
        submit => {
          this.debug('validate passed: ', submit)
          this.setValidState(
            { submit, error: null, errors: [ ] },
            this.props.onValid
          )
          return submit
        }
      )
      .catch(
        submit => {
          this.debug('validate failed: ', submit)
          this.handleError({
            error: submit.error, errors: submit.errors
          })
          throw submit
        }
      )
  }

  validator(): FormValidator {
    return (resolve, reject) => Promise.allSettled(
      Object.values(this.fields).map(
        field => field.validate()
      )
    )
      .then(
        results => results.reduce(
          // (submit, {status, value, reason}) => {
          (submit, {status, ...rest}) => {
            if (status === FULFILLED) {
              const { value } = rest as PromiseFulfilledResult<FieldValidateResultObject>
              Object.assign(
                submit.values,
                value.data || { [value.name as string]: value.value }
              )
            }
            else {
              const { reason } = rest as PromiseRejectedResult
              submit.errors.push(reason)
              // submit.errors.push(reason as FormErrorItem)
            }
            return submit
          },
          {
            values: { ...this.state.values },
            errors: [ ],
          } as FormValidatorResults
        )
      )
      .then(
        submit => {
          this.debug('field validation complete: ', submit)
          if (submit.errors?.length) {
            this.debug('errors detected, rejecting: ', submit)
            return reject(submit)
          }
          if (this.props.validate) {
            this.debug('validating form: ', submit)
            return this.props.validate(
              submit.values, this.getContext()
            )
              .then( values => resolve({ ...submit, values }) )
              .catch( failed => reject(failed) )
          }
          return resolve(submit)
        }
      )
  }

  unvalidate() {
    Object.values(this.fields).map(
      field => field.unvalidate()
    )
    this.setUnvalidatedState()
  }

  handleSubmit(submit: FormSubmitData) {
    this.debug('Form is valid, handling submission:', submit)
    const onSubmit = this.props.onSubmit
    if (noValue(onSubmit)) {
      window.alert(
        "You haven't defined an onSubmit handler: " + JSON.stringify(submit.values)
      )
      return
    }
    this.setSubmittingState(
      { },
      async () => {
        this.debug('calling onSubmit handler: ', submit)
        try {
          const response = await onSubmit(
            submit.values,
            this.getContext()
          )
          this.debug('onSubmit response:', response)
          this.setSubmittedState()
          if (response?.ok || response?.status === 200) {
            this.debug(`Success response ok:${response?.ok} status:${response?.status}`)
            this.handleSuccess(response)
          }
          else if (response.status && response?.status >= 400 && response.status <= 500) {
            this.debug(`Error response status:${response?.status}`)
            this.handleError(response.data)
          }
          else {
            throw new Error(`Unknown response: ${response?.status}`)
          }
        }
        catch (error) {
          this.debug('onSubmit error:', error)
          this.setSubmittedState()
          this.handleError(
            error instanceof Error
              ? { error: error.message }
              : isString(error)
                ? { error }
                : error as FormSubmitError
          )
        }
      }
    )
  }
  handleSuccess(response: FormSubmitResponse) {
    this.debug('handleSuccess()', response)
    const onSuccess = this.props.onSuccess || doNothing
    this.setValidState(
      { },
      callFunctions(
        () => onSuccess(response, this),
        this.props.resetOnSuccess ? () => this.reset() : undefined,
        this.props.unvalidateOnSuccess ? () => this.unvalidate() : undefined
      )
    )
  }
  handleError(params: FormSubmitError = { }) {
    // TODO: reset transient fields, reset form, etc
    // extract error/errors into state
    this.debug('handleError()', params)
    if (params.errors) {
      params.errors = this.sanitiseErrors(params.errors)
    }

    const firstField = isArray(params?.errors)
      ? this.fieldErrors(params.errors)
      : null

    // onFailure is provided as an alias for onError for backwards compatibility
    const onError = this.props.onError || this.props.onFailure || doNothing

    this.setInvalidState(
      params,
      callFunctions(
        () => onError(params),
        firstField
          ? () => firstField.setFocus()
          : undefined
      )
    )
  }
  fieldErrors(errors: FormErrorObjectItem[]) {
    this.debug(`fieldErrors: `, errors)
    const fields = errors.reduce(
      (fields: FieldContext[], error) => {
        const name = error.name ?? error.param ?? error.field
        const { message } = error
        const field = name ? this.fields[name] : null
        if (field) {
          error.label ||= field.props.label
          field.setInvalidState({ message })
          fields.push(field)
        }
        return fields
      },
      [ ] as FieldContext[]
    )
    return this.props.focusInvalidField && fields.length
      ? fields[0]
      : null
  }
  sanitiseErrors(errors: FormErrorObjectItem[]): FormErrorObjectItem[] {
    // convert an object of errors, e.g. { username: 'Already taken' }
    // into an array: [ { name: 'username', message: 'Already taken' }]
    if (isObject(errors)) {
      errors = Object.entries(errors).map(
        ([name, error]) => ({
          name,
          ...stringToObject(error as string, 'message') as FormErrorObjectItem
        })
      )
    }
    if (! isArray(errors)) {
      throw new Error(`Invalid errors type (not an array or object)`)
    }
    errors.forEach(
      error => error.message ??= error.error
    )
    return errors
  }


  //--------------------------------------------------------------------------
  // render
  //--------------------------------------------------------------------------
  getContext() {
    // console.log('getContext form props: ', this.props)
    const context = {
      // ...formDefaultProperties,
      ...this.props,    // properties passed to the context
      ...this.state,    // internal state
      ...this.actions,  // callable action functions mapped to methods
    }
    return context
  }
}

const generated = Generator(FormObject)

export const {
  Context, //: FormReactContext,
  Provider, //: FormProvider,
  Consumer, //: FormConsumer,
  Children, //: FormChildren,
  Use: useForm
} = generated

export default generated
