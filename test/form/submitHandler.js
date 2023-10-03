import { it, expect } from 'vitest'
import { submitHandler } from '../../lib/index.js'

const makeHelpers = (more={}) => {
  const errors = { }
  const setError = (name, error) => errors[name] = error
  const clearErrors = () => {
    for (const prop of Object.getOwnPropertyNames(errors)) {
      delete errors[prop]
    }
  }
  return { errors, setError, clearErrors, ...more }
}


it(
  'throws string',
  async () => {
    const helpers = makeHelpers()
    const { errors } = helpers
    const submitter = submitHandler(
      values => {
        throw `This has failed a:${values.a}`
      },
      helpers
    )
    const result = await submitter({ a: 10 })
    expect(result.ok).toBe(false)
    expect(errors['root.serverError'])
      .toStrictEqual({ type: 400, message: 'This has failed a:10' })
  }
)

it(
  'fails single error with status',
  async () => {
    const helpers = makeHelpers()
    const { errors } = helpers
    const submitter = submitHandler(
      (values, { fail }) => fail({
        error: `This has failed a:${values.a}`,
        status: 403
      }),
      helpers
    )
    const result = await submitter({ a: 10 })
    expect(result.ok).toBe(false)
    expect(errors['root.serverError'])
      .toStrictEqual({ type: 403, message: 'This has failed a:10' })
  }
)

it(
  'fails single error with object.message',
  async () => {
    const helpers = makeHelpers()
    const { errors } = helpers
    const submitter = submitHandler(
      (values, { fail }) => fail({
        error: {
          type: 404,
          message: `This has failed a:${values.a}`,
        }
      }),
      helpers
    )
    const result = await submitter({ a: 10 })
    expect(result.ok).toBe(false)
    expect(errors['root.serverError'])
      .toStrictEqual({ type: 404, message: 'This has failed a:10' })
  }
)

it(
  'fails multiple errors as object',
  async () => {
    const helpers = makeHelpers()
    const { errors } = helpers
    const submitter = submitHandler(
      (values, { fail }) => fail({
        errors: {
          a: `Bad a:${values.a}`,
          b: `Bad b:${values.b}`,
          c: `Bad c:${values.c}`,
        }
      }),
      helpers
    )
    const result = await submitter({ a: 10, b: 20, c: 30 })
    expect(result.ok).toBe(false)
    expect(errors.a)
      .toStrictEqual({ type: 'custom', message: 'Bad a:10' })
    expect(errors.b)
      .toStrictEqual({ type: 'custom', message: 'Bad b:20' })
    expect(errors.c)
      .toStrictEqual({ type: 'custom', message: 'Bad c:30' })
  }
)

it(
  'fails multiple errors as array',
  async () => {
    const helpers = makeHelpers()
    const { errors } = helpers
    const submitter = submitHandler(
      (values, { fail }) => fail({
        errors: [
          { name:  'a', message: `Bad a:${values.a}` },
          { field: 'b', message: `Bad b:${values.b}` },
          { param: 'c', error:   `Bad c:${values.c}` },
        ]
      }),
      helpers
    )
    const result = await submitter({ a: 10, b: 20, c: 30 })
    expect(result.ok).toBe(false)
    expect(errors.a)
      .toStrictEqual({ type: 'custom', message: 'Bad a:10', name: 'a' })
    expect(errors.b)
      .toStrictEqual({ type: 'custom', message: 'Bad b:20', field: 'b' })
    expect(errors.c)
      .toStrictEqual({ type: 'custom', message: 'Bad c:30', param: 'c', error: 'Bad c:30' })
  }
)

it(
  'passes and clears errors',
  async () => {
    const helpers = makeHelpers()
    const { errors } = helpers
    errors.random = 'A random error which should be cleared'
    const submitter = submitHandler(
      (values, { pass }) => pass({
        ok: true
      }),
      helpers
    )
    const result = await submitter({ a: 10, b: 20, c: 30 })
    expect(result.ok).toBe(true)
    expect(errors).toStrictEqual({ })
  }
)
