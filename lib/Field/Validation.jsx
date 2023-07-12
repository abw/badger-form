import { doNothing, isBoolean, isObject, isString } from '@abw/badger-utils'
import { INVALID, VALID, VALIDATE } from '../Constants.jsx'
import errorMessage from './errorMessage.js'

const DEBUG = false
const debug = DEBUG
  ? (...args) => console.log(...args)
  : doNothing

export const fieldValidator = (
  name, validate,
  { setValue, setError, clearErrors, setStatus }
) => {
  const vfn = validator(validate)
  return (input, options={}) => {
    const { valid, value, message, type=VALIDATE } = vfn(input, options)
    // const result = vfn(input, options)
    setValue(name, value)
    if (valid) {
      setStatus(VALID)
      clearErrors(name)
    }
    else {
      setStatus(INVALID)
      setError(
        name,
        { type, message: errorMessage({ type, message }) }
      )
    }
  }
}

export const validator = (fn, config={}) =>
  (input, options={}) => new Promise(
    (pass, fail) => {
      try {
        pass(
          fn(input, { ...config, ...options, pass, fail })
        )
      }
      catch (error) {
        debug('function threw error:', error)
        if (isString(error)) {
          debug(`- threw string:`, error)
          fail({ valid: false, value: input, message: error })
        }
        else if (isObject(error)) {
          debug(`- threw object:`, error)
          fail({ valid: false, value: input, ...error })
        }
        else {
          debug(`- threw something else:`, error)
          fail(error)
        }
      }
    })
    .then(
      result => {
        debug('✔︎ PASS:', result)
        if (isBoolean(result)) {
          return { valid: result, value: input }
        }
        else if (isObject(result)) {
          return { valid: true, value: input, ...result }
        }
        else {
          return { valid: true, value: result ?? input }
        }
      }
    )
    .catch(
      result => {
        debug('✗ FAIL:', result)
        if (isBoolean(result)) {
          return { valid: result, value: input }
        }
        else if (isObject(result)) {
          return { valid: false, value: input, ...result }
        }
        else {
          return { valid: false, value: result ?? input }
        }
      }
    )
