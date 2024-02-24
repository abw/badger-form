import { it, expect } from 'vitest'
import { hasStatus } from '../../lib/Status.js'

it(
  'has not changed',
  () => expect(
    hasStatus({
      status: { },
      changed: true
    })
  ).toBe(false)
)
it(
  'has changed',
  () => expect(
    hasStatus({
      status: { changed: true },
      changed: true
    })
  ).toBe(true)
)
it(
  'has changed but is not valid',
  () => expect(
    hasStatus({
      status: { changed: true },
      changed: true,
      valid: true
    })
  ).toBe(false)
)
it(
  'has changed and is valid',
  () => expect(
    hasStatus({
      status: { changed: true, valid: true },
      changed: true,
      valid: true
    })
  ).toBe(true)
)
it(
  'has changed or is valid',
  () => expect(
    hasStatus({
      status: { changed: true },
      any: true,
      changed: true,
      valid: true
    })
  ).toBe(true)
)

/*
export const hasStatus = ({
  status,
  any=false,
  ...props
}) => {
  const states = [VALID, INVALID, CHANGED, VALIDATING, SUBMITTING, SUBMITTED]
    .filter( state => hasValue(props[state]) )
    .map( state => status[state] )
  return any
    ? states.some(Boolean)
    : states.every(Boolean)
}
*/