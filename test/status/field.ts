import { describe, it, expect } from 'vitest'
import { newFieldStatus } from '@/lib/Status'
import { BLUR, CHANGED, FOCUS, INVALID, RESET, VALID, VALIDATING } from '@/lib/Constants'

describe(
  'Default field status',
  () => {
    const newStatus = newFieldStatus({})
    it(
      'has reset status',
      () => {
        const status = newStatus(RESET)
        expect(status).toEqual({
          valid: false,
          invalid: false,
          changed: false,
          validating: false,
          focus: false,
          disabled: false,
        })
      }
    )
    it(
      'has changed status',
      () => {
        const status = newStatus(CHANGED)
        expect(status).toEqual({
          valid: false,
          invalid: false,
          changed: true,
        })
      }
    )
    it(
      'has validating status',
      () => {
        const status = newStatus(VALIDATING)
        expect(status).toEqual({
          valid: false,
          invalid: false,
          validating: true,
        })
      }
    )
    it(
      'has valid status',
      () => {
        const status = newStatus(VALID)
        expect(status).toEqual({
          valid: true,
          invalid: false,
          validating: false,
        })
      }
    )
    it(
      'has invalid status',
      () => {
        const status = newStatus(INVALID)
        expect(status).toEqual({
          valid: false,
          invalid: true,
          validating: false,
        })
      }
    )
    it(
      'has focus status',
      () => {
        const status = newStatus(FOCUS)
        expect(status).toEqual({
          focus: true,
        })
      }
    )
    it(
      'has blur status',
      () => {
        const status = newStatus(BLUR)
        expect(status).toEqual({
          focus: false,
        })
      }
    )
  }
)

describe(
  'Disabled field status',
  () => {
    const newStatus = newFieldStatus({ disabled: true })
    it(
      'has reset status',
      () => {
        const status = newStatus(RESET)
        expect(status).toEqual({
          valid: false,
          invalid: false,
          changed: false,
          validating: false,
          focus: false,
          disabled: true,
        })
      }
    )
  }
)

describe(
  'Changing field status',
  () => {
    const newStatus = newFieldStatus({})
    const status = newStatus(RESET)

    it(
      'starts with reset status',
      () => expect(status).toEqual({
        valid: false,
        invalid: false,
        changed: false,
        validating: false,
        focus: false,
        disabled: false,
      })
    )

    const status2 = newStatus(FOCUS, status)
    it(
      'changes to focus status',
      () => expect(status2).toEqual({
        valid: false,
        invalid: false,
        changed: false,
        validating: false,
        focus: true,
        disabled: false,
      })
    )

    const status3 = newStatus(BLUR, status2)
    it(
      'changes to blur status',
      () => expect(status3).toEqual({
        valid: false,
        invalid: false,
        changed: false,
        validating: false,
        focus: false,
        disabled: false,
      })
    )

    const status4 = newStatus(CHANGED, status3)
    it(
      'changes to changed status',
      () => expect(status4).toEqual({
        valid: false,
        invalid: false,
        changed: true,
        validating: false,
        focus: false,
        disabled: false,
      })
    )

    const status5 = newStatus(VALIDATING, status4)
    it(
      'changes to validating status',
      () => expect(status5).toEqual({
        valid: false,
        invalid: false,
        changed: true,
        validating: true,
        focus: false,
        disabled: false,
      })
    )

    const status6 = newStatus(VALID, status5)
    it(
      'changes to valid status',
      () => expect(status6).toEqual({
        valid: true,
        invalid: false,
        changed: true,
        validating: false,
        focus: false,
        disabled: false,
      })
    )

    const status7 = newStatus(INVALID, status6)
    it(
      'changes to invalid status',
      () => expect(status7).toEqual({
        valid: false,
        invalid: true,
        changed: true,
        validating: false,
        focus: false,
        disabled: false,
      })
    )
  }
)
