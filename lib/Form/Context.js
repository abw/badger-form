import BaseContext from '../Context.js'
import { Generator } from '@abw/react-context'
import { FULFILLED, SUBMITTED, SUBMITTING } from '../Constants'
import { doNothing, extract, isArray, isObject, isString } from '@abw/badger-utils'
import { callFunctions, stringToObject } from '../Utils'
import { formDefaultProperties, formFieldProperties } from '../Config.js'
import { newFormStatus } from '../Status'

class FormContext extends BaseContext {
  static newStatus    = newFormStatus
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
    'setResetState', 'setChangedState',
    'setValidatingState', 'setValidState', 'setInvalidState',
    'setSubmittingState', 'setSubmittedState',
    'handleError'
  ]

  constructor(props) {
    super(props)
    this.fields = { }

    const {
      // fields={ },
      hidden={ }
    } = props
    const initialValues = { ...hidden }
    const defaults = {
      ...formDefaultProperties,
      ...this.props,
    }

    this.state = {
      // ...formDefaultProperties,
      ...defaults,
      ...this.state,
      initialValues,
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

  // Fields
  fieldSpec(name, props) {
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
  attachField(name, field) {
    this.debug(`attaching ${name} field`)
    this.fields[name] = field
    this.setState(
      state => ({
        values: {
          ...state.values,
          [name]: field.state.value
        }
      })
    )
  }
  detachField(name) {
    this.debug(`detaching ${name} field`)
    delete this.fields[name]
  }

  setSubmittingState(state, callback) {
    this.setStatus(SUBMITTING, state, callback)
  }
  setSubmittedState(state, callback) {
    this.setStatus(SUBMITTED, state, callback)
  }

  //--------------------------------------------------------------------------
  // Field focus
  //--------------------------------------------------------------------------
  setFocus(name, event) {
    event?.preventDefault()
    this.fields[name]?.setFocus()
  }

  //--------------------------------------------------------------------------
  // Set/Reset
  //--------------------------------------------------------------------------
  reset(e) {
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
  setValue(name, value) {
    // JFDI - called by fields when they change
    this.debug(`setValue(${name}, ${value})`)
    /*
    this.setChangedState(
      {
        values: {
          ...this.state.values,
          [name]: value
        }
      }
    )
    */
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
  setValues(values, event) {
    this.debug('setValues():', values)
    event?.preventDefault()
    Object.entries(values).forEach(
      ([name, value]) => this.fields[name]?.setValue(value)
    )
  }

  setHidden(values) {
    const hidden = {
      ...this.state.hidden,
      ...values
    }
    this.setState({ hidden })
  }

  //--------------------------------------------------------------------------
  // Submit
  //--------------------------------------------------------------------------
  submit(event) {
    this.debug('submit()')
    event?.preventDefault()
    this.validate()
      .then( submit => this.handleSubmit(submit) )
      .catch( submit => this.debug('Form is NOT valid:', submit) )
  }

  validate() {
    this.debug('validate()')
    this.setValidatingState()

    return new Promise( this.validator() )
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

  validator() {
    return (resolve, reject) => Promise.allSettled(
      Object.values(this.fields).map(
        field => field.validate()
      )
    )
      .then(
        results => results.reduce(
          (submit, {status, value, reason}) => {
            if (status === FULFILLED) {
              Object.assign(
                submit.values,
                value.data || { [value.name]: value.value }
              )
            }
            else {
              submit.errors.push(reason)
            }
            return submit
          },
          {
            values: { ...this.state.values },
            errors: [ ],
          }
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

  handleSubmit(submit) {
    this.debug('Form is valid, handling submission:', submit)
    if (! this.props.onSubmit) {
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
          const response = await this.props.onSubmit(submit.values, this.getContext())
          this.debug('onSubmit response:', response)
          this.setSubmittedState()
          if (response?.ok || response?.status === 200) {
            this.debug(`Success response ok:${response?.ok} status:${response?.status}`)
            this.handleSuccess(response)
          }
          else if (response?.status >= 400 && response.status <= 500) {
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
            isString(error)
              ? { error }
              : error instanceof Error
                ? { error: error.message }
                : error
          )
        }
      }
    )
  }
  handleSuccess(response) {
    this.debug('handleSuccess()', response)
    const onSuccess = this.props.onSuccess || doNothing
    this.setValidState(
      { },
      callFunctions(
        () => onSuccess(response, this),
        this.props.resetOnSuccess && (() => this.reset()),
        this.props.unvalidateOnSuccess && (() => this.unvalidate())
      )
    )
  }
  handleError(params={}) {
    // TODO: reset transient fields, reset form, etc
    // extract error/errors into state
    this.debug('handleError()', params)
    if (params.errors) {
      params.errors = this.sanitiseErrors(params.errors)
    }

    const firstField = isArray(params?.errors) && this.fieldErrors(params.errors)

    // onFailure is provided as an alias for onError for backwards compatibility
    const onError = this.props.onError || this.props.onFailure || doNothing

    this.setInvalidState(
      params,
      callFunctions(
        () => onError(params),
        firstField
          ? () => firstField.setFocus()
          : null
      )
    )
  }
  fieldErrors(errors) {
    this.debug(`fieldErrors: `, errors)
    const fields = errors.reduce(
      (fields, error) => {
        const name = error.name ?? error.param ?? error.field
        const { message } = error
        const field = name && this.fields[name]
        if (field) {
          error.label ||= field.props.label
          field.setInvalidState({ message })
          fields.push(field)
        }
        return fields
      },
      [ ]
    )
    return this.state.focusInvalidField && fields.length
      ? fields[0]
      : null
  }
  sanitiseErrors(errors) {
    // convert an object of errors, e.g. { username: 'Already taken' }
    // into an array: [ { name: 'username', message: 'Already taken' }]
    if (isObject(errors)) {
      errors = Object.entries(errors).map(
        ([name, error]) => ({
          name,
          ...stringToObject(error, 'message')
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

const generated = Generator(FormContext)
export const { Context, Provider, Consumer, Children, Use: useForm } = generated
export default generated
