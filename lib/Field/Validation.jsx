import { doNothing, isBoolean, isObject, isString } from '@abw/badger-utils'

const DEBUG = false
const debug = DEBUG
  ? (...args) => console.log(...args)
  : doNothing

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
