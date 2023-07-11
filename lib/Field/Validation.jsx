// returns true - value unchanged
//   validate = value => value.match(/foo/)
// returns modified value
//   validate = value => yup.string().trim().validate(value)
// throws error - value unchanged

import { isBoolean, isObject, isString } from '@abw/badger-utils'
const debug = (...args) => console.log(...args)

export const validationPromise = (fn, options={}) => input =>
  new Promise(
    (pass, fail) => {
      let result
      try {
        const response = fn(input, { ...options, pass, fail })
        debug(`validate function returned:`, response)
        if (isBoolean(response)) {
          result = { valid: response, value: input }
        }
        else if (isObject(response)) {
          result = { valid: true, value: input, ...response }
        }
        else {
          result = { valid: true, value: response }
        }
        debug(`validate function result:`, result)
      }
      catch (err) {
        debug(`validate function threw error:`, err)
        if (isString(err)) {
          debug(`threw string:`, err)
          result = { valid: false, value: input, message: err }
        }
        else if (isObject(err)) {
          debug(`threw object:`, err)
          result = { valid: false, value: input, ...err }
        }
        else {
          debug(`threw something else:`, err)
          result = { valid: false, value: input }
        }
      }
      return result.valid
        ? pass(result)
        : fail(result)
    }
  )


export default validationPromise