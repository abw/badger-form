import { it, expect } from 'vitest'
import { validationPromise } from '../../lib/index.js'

// function which returns true/false to indicate value is valid or not
it(
  'returns boolean',
  async () => {
    const validate = validationPromise( input => Boolean(input) )
    validate(true)
      .then(
        result => {
          expect(result.valid).toBe(true)
          expect(result.value).toBe(true)
        }
      )

    validate('hello')
      .then(
        result => {
          expect(result.valid).toBe(true)
          expect(result.value).toBe('hello')
        }
      )

    validate(false)
      .catch(
        result => {
          expect(result.valid).toBe(false)
          expect(result.value).toBe(false)
        }
      )

    validate(0)
      .catch(
        result => {
          expect(result.valid).toBe(false)
          expect(result.value).toBe(0)
        }
      )
  }
)

// function which returns possibly modified value or throws an error
it(
  'returns value or throws error',
  async () => {
    const validate = validationPromise(
      input => {
        const trimmed = input.trim()
        if (trimmed.match(/^(y|yes)$/i)) {
          return trimmed
        }
        else {
          throw 'Not yes'
        }
      }
    )
    validate('y')
      .then(
        result => {
          expect(result.valid).toBe(true)
          expect(result.value).toBe('y')
        }
      )
    validate('yes')
      .then(
        result => {
          expect(result.valid).toBe(true)
          expect(result.value).toBe('yes')
        }
      )
    validate(' yes ')
      .then(
        result => {
          expect(result.valid).toBe(true)
          expect(result.value).toBe('yes')
        }
      )
    validate('no')
      .catch(
        result => {
          expect(result.valid).toBe(false)
          expect(result.value).toBe('no')
        }
      )
  }
)

// function which returns possibly modified value or throws an error object
it(
  'returns value or throws error',
  async () => {
    const validate = validationPromise(
      input => {
        const trimmed = input.trim()
        if (trimmed.match(/^(y|yes)$/i)) {
          return trimmed
        }
        else {
          throw { value: trimmed, message: 'Not yes' }
        }
      }
    )
    validate('y')
      .then(
        result => {
          expect(result.valid).toBe(true)
          expect(result.value).toBe('y')
        }
      )
    validate('yes')
      .then(
        result => {
          expect(result.valid).toBe(true)
          expect(result.value).toBe('yes')
        }
      )
    validate(' yes ')
      .then(
        result => {
          expect(result.valid).toBe(true)
          expect(result.value).toBe('yes')
        }
      )
    validate('no')
      .catch(
        result => {
          expect(result.valid).toBe(false)
          expect(result.value).toBe('no')
        }
      )
    validate(' no ')
      .catch(
        result => {
          expect(result.valid).toBe(false)
          expect(result.value).toBe('no')
        }
      )
  }
)

// function which calls pass or fail
it(
  'calls pass or fail',
  async () => {
    const validate = validationPromise(
      (input, { pass, fail }) => input.match(/^(y|yes)$/i)
        ? pass('This is fine')
        : fail('This is not fine')
    )
    validate('y')
      .then(
        result => expect(result).toBe('This is fine')
      )
    validate('yes')
      .then(
        result => expect(result).toBe('This is fine')
      )
    validate('no')
      .catch(
        result => expect(result).toBe('This is not fine')
      )
  }
)