import { it, expect } from 'vitest'
import { validator } from '../../lib/index.js'

// function which returns true/false to indicate value is valid or not
it(
  'returns boolean',
  async () => {
    const validate = validator( input => Boolean(input) )
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
      .then(
        result => {
          expect(result.valid).toBe(false)
          expect(result.value).toBe(false)
        }
      )

    validate(0)
      .then(
        result => {
          expect(result.valid).toBe(false)
          expect(result.value).toBe(0)
        }
      )
  }
)

// asynchronous function which returns true/false
it(
  'returns boolean async',
  async () => {
    const validate = validator( async input => Boolean(input) )
    validate(true)
      .then(
        result => {
          expect(result.valid).toBe(true)
          expect(result.value).toBe(true)
        }
      )
    validate(false)
      .then(
        result => {
          expect(result.valid).toBe(false)
          expect(result.value).toBe(false)
        }
      )
  }
)

// function which returns possibly modified value or throws an error string
it(
  'returns value or throws error',
  async () => {
    const validate = validator(
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
      .then(
        result => {
          expect(result.valid).toBe(false)
          expect(result.value).toBe('no')
          expect(result.message).toBe('Not yes')
        }
      )
    validate(' no ')
      .then(
        result => {
          expect(result.valid).toBe(false)
          expect(result.value).toBe(' no ')
          expect(result.message).toBe('Not yes')
        }
      )
  }
)

// function which returns possibly modified value or throws an error object
it(
  'returns value or throws error',
  async () => {
    const validate = validator(
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
      .then(
        result => {
          expect(result.valid).toBe(false)
          expect(result.value).toBe('no')
        }
      )
    validate(' no ')
      .then(
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
    const validate = validator(
      (input, { pass, fail }) => input.match(/^(y|yes)$/i)
        ? pass()
        : fail()
    )
    validate('y')
      .then(
        result => {
          expect(result.valid).toBe(true)
          expect(result.value).toBe('y')
        }
      )
    validate('no')
      .then(
        result => {
          expect(result.valid).toBe(false)
          expect(result.value).toBe('no')
        }
      )
  }
)

// function which calls pass or fail with modified value
it(
  'calls pass or fail with modified value',
  async () => {
    const validate = validator(
      (input, { pass, fail }) => input.match(/^(y|yes)$/i)
        ? pass('yes')
        : fail('no')
    )
    validate('y')
      .then(
        result => {
          expect(result.valid).toBe(true)
          expect(result.value).toBe('yes')
        }
      )
    validate('yes')
      .then(
        result => {
          expect(result.valid).toBe(true)
          expect(result.value).toBe('yes')
        }
      )
    validate('no')
      .then(
        result => {
          expect(result.valid).toBe(false)
          expect(result.value).toBe('no')
        }
      )
    validate('nope')
      .then(
        result => {
          expect(result.valid).toBe(false)
          expect(result.value).toBe('no')
        }
      )
  }
)

// function which calls pass or fail with message
it(
  'calls pass or fail with message',
  async () => {
    const validate = validator(
      (input, { pass, fail }) => input.match(/^(y|yes)$/i)
        ? pass({ message: 'That is fine' })
        : fail({ message: 'Not OK' })
    )
    validate('y')
      .then(
        result => {
          expect(result.valid).toBe(true)
          expect(result.value).toBe('y')
          expect(result.message).toBe('That is fine')
        }
      )
    validate('yes')
      .then(
        result => {
          expect(result.valid).toBe(true)
          expect(result.value).toBe('yes')
          expect(result.message).toBe('That is fine')
        }
      )
    validate('no')
      .then(
        result => {
          expect(result.valid).toBe(false)
          expect(result.value).toBe('no')
          expect(result.message).toBe('Not OK')
        }
      )
    validate('nope')
      .then(
        result => {
          expect(result.valid).toBe(false)
          expect(result.value).toBe('nope')
          expect(result.message).toBe('Not OK')
        }
      )
  }
)
// function which calls pass or fail with message and new value
it(
  'calls pass or fail with message',
  async () => {
    const validate = validator(
      (input, { pass, fail }) => input.match(/^(y|yes)$/i)
        ? pass({ message: 'OK',     value: true  })
        : fail({ message: 'Not OK', value: false })
    )
    validate('y')
      .then(
        result => {
          expect(result.valid).toBe(true)
          expect(result.value).toBe(true)
          expect(result.message).toBe('OK')
        }
      )
    validate('yes')
      .then(
        result => {
          expect(result.valid).toBe(true)
          expect(result.value).toBe(true)
          expect(result.message).toBe('OK')
        }
      )
    validate('no')
      .then(
        result => {
          expect(result.valid).toBe(false)
          expect(result.value).toBe(false)
          expect(result.message).toBe('Not OK')
        }
      )
    validate('nope')
      .then(
        result => {
          expect(result.valid).toBe(false)
          expect(result.value).toBe(false)
          expect(result.message).toBe('Not OK')
        }
      )
  }
)
