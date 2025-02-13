import { it, expect } from 'vitest'
import { fieldHasStatus } from '@/lib/Status'

it(
  'has not changed',
  () => expect(
    fieldHasStatus({
      status: { },
      changed: true
    })
  ).toBe(false)
)
it(
  'has changed',
  () => expect(
    fieldHasStatus({
      status: { changed: true },
      changed: true
    })
  ).toBe(true)
)
it(
  'has changed but is not valid',
  () => expect(
    fieldHasStatus({
      status: { changed: true },
      changed: true,
      valid: true
    })
  ).toBe(false)
)
it(
  'has changed and is valid',
  () => expect(
    fieldHasStatus({
      status: { changed: true, valid: true },
      changed: true,
      valid: true
    })
  ).toBe(true)
)
it(
  'has changed or is valid',
  () => expect(
    fieldHasStatus({
      status: { changed: true },
      any: true,
      changed: true,
      valid: true
    })
  ).toBe(true)
)
