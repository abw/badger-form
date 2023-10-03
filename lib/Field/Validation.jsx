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
  debug(`building new validator`)
  const vfn = validator(validate)
  return async (input, options={}) => {
    debug('validator input: ', input)
    const { valid, value, message, type=VALIDATE } = await vfn(input, options)
    debug(`fieldValidator valid: ${valid}`)
    debug(`fieldValidator value: ${value}`)
    debug(`fieldValidator message: ${message}`)
    debug(`fieldValidator type: ${type}`)
    setValue(name, value)
    if (valid) {
      debug(`${name} field is valid`)
      setStatus(VALID)
      clearErrors(name)
      return true
    }
    else {
      debug(`${name} field is invalid: ${message}`)
      setStatus(INVALID)
      const msgData = errorMessage({ type, message })
      setError(
        name,
        { type, message: msgData }
      )
      return msgData
    }
  }
}

export const validator = (fn, config={}) =>
  (input, options={}) => new Promise(
    // eslint-disable-next-line no-async-promise-executor
    async (pass, fail) => {
      try {
        const result = await fn(input, { ...config, ...options, pass, fail })
        debug(`validator result: ${result}`)
        if (isBoolean(result) && ! result) {
          fail(result)
        }
        else {
          pass(result)
        }
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
