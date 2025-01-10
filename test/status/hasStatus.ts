import { it, expect } from 'vitest'
import { hasStatus } from '@/lib/Status'

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
