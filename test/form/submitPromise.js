import { it, expect } from 'vitest'
import { submitPromise } from '../../lib/index.js'

// function which returns true/false to indicate value is valid or not
it(
  'throws string',
  async () => {
    const submitter = submitPromise(
      values => {
        throw `This has failed a:${values.a}`
      }
    )
    const result = await submitter({ a: 10 })
    expect(result.ok).toBe(false)
    expect(result.error).toBe('This has failed a:10')
  }
)

it(
  'throws Error as string',
  async () => {
    const submitter = submitPromise(
      values => {
        throw new Error(`This has failed a:${values.a}`)
      }
    )
    const result = await submitter({ a: 10 })
    expect(result.ok).toBe(false)
    expect(result.error).toBe('This has failed a:10')
  }
)

it(
  'returns object with ok false',
  async () => {
    const submitter = submitPromise(
      values => ({ ok: false, a: values.a })
    )
    const result = await submitter({ a: 10 })
    expect(result.ok).toBe(false)
    expect(result.a).toBe(10)
  }
)

it(
  'returns object with ok false and error',
  async () => {
    const submitter = submitPromise(
      values => ({ ok: false, error: `This has failed a:${values.a}` })
    )
    const result = await submitter({ a: 10 })
    expect(result.ok).toBe(false)
    expect(result.error).toBe(`This has failed a:10`)
  }
)

it(
  'returns object with ok true',
  async () => {
    const submitter = submitPromise(
      values => ({ ok: true, error: `This has failed a:${values.a}` })
    )
    const result = await submitter({ a: 10 })
    expect(result.ok).toBe(true)
    expect(result.error).toBe(`This has failed a:10`)
  }
)

it(
  'async returns object with ok true',
  async () => {
    const submitter = submitPromise(
      async values => ({ ok: true, error: `This has failed a:${values.a}` })
    )
    const result = await submitter({ a: 10 })
    expect(result.ok).toBe(true)
    expect(result.error).toBe(`This has failed a:10`)
  }
)

it(
  'calls pass',
  async () => {
    const submitter = submitPromise(
      (values, { pass }) => pass({ message: 'Hello World!', ...values })
    )
    const result = await submitter({ a: 10 })
    expect(result.ok).toBe(true)
    expect(result.message).toBe('Hello World!')
    expect(result.a).toBe(10)
  }
)

it(
  'calls fail',
  async () => {
    const submitter = submitPromise(
      (values, { fail }) => fail({ message: 'Hello World!', ...values })
    )
    const result = await submitter({ a: 10 })
    expect(result.ok).toBe(false)
    expect(result.message).toBe('Hello World!')
    expect(result.a).toBe(10)
  }
)

it(
  'returns resolved promise',
  async () => {
    const submitter = submitPromise(
      values => Promise.resolve({ ok: true, message: 'Hello World!', ...values })
    )
    const result = await submitter({ a: 10 })
    expect(result.ok).toBe(true)
    expect(result.message).toBe('Hello World!')
    expect(result.a).toBe(10)
  }
)

it(
  'returns rejected promise',
  async () => {
    const submitter = submitPromise(
      values => Promise.reject({ message: 'Hello World!', ...values })
    )
    const result = await submitter({ a: 10 })
    expect(result.ok).toBe(false)
    expect(result.message).toBe('Hello World!')
    expect(result.a).toBe(10)
  }
)
