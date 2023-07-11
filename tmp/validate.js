#!/usr/bin/env node
import { isObject, isString } from '@abw/badger-utils'

const validatePromise = (input, validator, options={}) =>
  new Promise(
    (resolve, reject) => {
      try {
        const value = validator(input, { ...options, resolve, reject })
        console.log(`validator returned value:`, value)
        if (value) {
          resolve(
            isObject(value)
              ? { message: 'Valid', ...value }
              : { message: 'Valid', value }
          )
        }
        else {
          reject(
            isObject(value)
              ? { message: 'Invalid', ...value }
              : { message: 'Invalid', value }
          )
        }
      }
      catch (err) {
        console.log(`validator threw error:`, err)
        const message = isString(err)
          ? err
          : err.message
        reject({ message })
      }
    }
  )

const validate = async (input, validator, pass, fail) => {
  const promise = validatePromise(input, validator)
  await promise
    .then(
      state => {
        console.log(`resolved state:`, state)
      }
    )
    .catch(
      state => {
        console.log(`rejected state:`, state)
      }
    )
}

const isTrue = value => value
const resolveTrue = (value, { resolve, reject }) => value
  ? resolve(value)
  : reject(value)
const resolveMessage = (value, { resolve, reject }) => value
  ? resolve({ value, message: 'Jolly Good!' })
  : reject({ value, message: 'Oh dear!' })

await validate(true, isTrue)
await validate(false, isTrue)
await validate(true, resolveTrue)
await validate(false, resolveTrue)
await validate(true, resolveMessage)
await validate(false, resolveMessage)