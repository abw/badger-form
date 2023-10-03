import {
  doNothing, fail, hasValue, isArray, isObject, isString
} from '@abw/badger-utils'
import { CUSTOM } from '../Constants.jsx'

const DEBUG = false
const debug = DEBUG
  ? (...args) => console.log(...args)
  : doNothing

export const submitHandler = (
  onSubmit,
  {
    setError,
    clearErrors,
    validResponse,
    onSuccess,
    onError,
    defaultResponse={ ok: true },
    formatError=defaultFormatError,
    errorFieldName=defaultErrorFieldName,
  }
) => {
  const submit = submitPromise(
    onSubmit,
    { defaultResponse, validResponse }
  )

  return async (values, options={}) => {
    const result = await submit(values, options) || defaultResponse
    const { ok, error, errors, status } = result
    debug(`submitHandler ok: ${ok}`)
    debug(`submitHandler error: ${error}`)
    debug(`submitHandler errors:`, errors)
    if (ok) {
      clearErrors()
      return onSuccess
        ? onSuccess(result)
        : result
    }
    else {
      if (hasValue(error)) {
        debug('setting server error: ', error)
        setError(
          'root.serverError',
          formatError(error, status ?? 400)
        )
      }
      if (hasValue(errors)) {
        debug('setting field errors: ', errors)
        if (isArray(errors)) {
          // array of errors
          let n = 1
          errors.forEach(
            error => {
              // values should be a string or object, hopefully containing
              // something to identify the field: field, name or param
              const data = formatError(error)
              const name = errorFieldName(data) || ('error-' + n++)
              setError(name, data)
            }
          )
        }
        else if (isObject(errors)) {
          // object containing errors, where the keys are field names and
          // the values are strings or objects
          Object.entries(errors).forEach(
            ([name, error]) => setError(name, formatError(error))
          )
        }
      }
      return onError
        ? onError(result)
        : result
    }
  }
}

export const submitPromise = (onSubmit, config={}) =>
  (values, options={}) => new Promise(
    // eslint-disable-next-line no-async-promise-executor
    async (pass, fail) => {
      const merged = { ...config, ...options, pass, fail }
      const { defaultResponse, validResponse=defaultValidResponse } = merged

      try {
        const response = await onSubmit(
          values, merged
        ) || defaultResponse
        debug('response', response)
        if (validResponse(response)) {
          pass(response)
        }
        else {
          fail(response)
        }
      }
      catch (error) {
        debug('onSubmit threw error:', error)
        if (isString(error)) {
          debug(`- threw string:`, error)
          fail({ error })
        }
        else if (error instanceof Error) {
          debug(`- threw Error:`, error)
          fail({ error: error.message })
        }
        else if (isObject(error)) {
          debug(`- threw object:`, error)
          fail(error)
        }
        else {
          debug(`- threw something else:`, error)
          fail({ error })
        }
      }
    })
    .then(
      result => {
        debug('✔︎ PASS:', result)
        if (isString(result)) {
          return { ok: true, message: result }
        }
        else if (isObject(result)) {
          return { ok: true, ...result }
        }
        else {
          return { ok: true, result }
        }
      }
    )
    .catch(
      result => {
        debug('✗ FAIL:', result)
        if (isString(result)) {
          return { ok: false, error: result }
        }
        else if (isObject(result)) {
          return { ok: false, ...result }
        }
        else {
          return { ok: false, result }
        }
      }
    )

export const defaultFormatError = (error, status) => {
  if (isString(error)) {
    return {
      type: status ?? CUSTOM,
      message: error
    }
  }
  if (isObject(error)) {
    return {
      type: status ?? CUSTOM,
      message: error.message || error.error,
      ...error
    }
  }
  return fail(`Invalid error type: ${error}`)
}

export const defaultErrorFieldName = error =>
  error.field ?? error.name ?? error.param

export const defaultValidResponse = response => {
  const { ok, status=0 } = response
  return hasValue(ok)
    ? Boolean(ok)
    : (status >= 200 && status < 300)
}



// TODO: code to wrap around onSubmit method to catch errors.
// https://github.com/react-hook-form/react-hook-form/blob/master/src/form.tsx
/*

Error handling:
  * error => sets form error

  * errors => { field1: msg, field2: msg } => sets field errors

  * errors = [
      { name: field1, message: msg },
      { name: field1, error: msg },
      { field: field1, message: msg },
      { param: field1, message: msg },
    ]

*/