import { describe, it, expect } from 'vitest'
import { newFormStatus } from '../../lib/Status.js'
import { CHANGED, INVALID, RESET, SUBMITTED, SUBMITTING, VALID, VALIDATING } from '../../lib/Constants.jsx'

describe(
  'Default form status',
  () => {
    const newStatus = newFormStatus({})
    it(
      'has reset status',
      () => {
        const status = newStatus(RESET)
        expect(status).toEqual({
          valid: false,
          invalid: false,
          changed: false,
          validating: false,
          submitting: false,
          submitted: false,
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
      'has submitting status',
      () => {
        const status = newStatus(SUBMITTING)
        expect(status).toEqual({
          submitting: true,
          submitted: false,
        })
      }
    )
    it(
      'has submitted status',
      () => {
        const status = newStatus(SUBMITTED)
        expect(status).toEqual({
          submitting: false,
          submitted: true,
        })
      }
    )
  }
)

describe(
  'Changing form status',
  () => {
    const newStatus = newFormStatus({})
    const status1 = newStatus(RESET)
    it(
      'starts with reset status',
      () => expect(status1).toEqual({
        changed: false,
        valid: false,
        invalid: false,
        validating: false,
        submitting: false,
        submitted: false,
      })
    )

    const status2 = newStatus(CHANGED, status1)
    it(
      'changes to changed status',
      () => expect(status2).toEqual({
        changed: true,
        valid: false,
        invalid: false,
        validating: false,
        submitting: false,
        submitted: false,
      })
    )

    const status3 = newStatus(VALIDATING, status2)
    it(
      'changes to validating status',
      () => expect(status3).toEqual({
        changed: true,
        valid: false,
        invalid: false,
        validating: true,
        submitting: false,
        submitted: false,
      })
    )

    const status4 = newStatus(VALID, status3)
    it(
      'changes to valid status',
      () => expect(status4).toEqual({
        changed: true,
        valid: true,
        invalid: false,
        validating: false,
        submitting: false,
        submitted: false,
      })
    )

    const status5 = newStatus(INVALID, status4)
    it(
      'changes to invalid status',
      () => expect(status5).toEqual({
        changed: true,
        valid: false,
        invalid: true,
        validating: false,
        submitting: false,
        submitted: false,
      })
    )

    const status6 = newStatus(SUBMITTING, status5)
    it(
      'changes to submitting status',
      () => expect(status6).toEqual({
        changed: true,
        valid: false,
        invalid: true,
        validating: false,
        submitting: true,
        submitted: false,
      })
    )

    const status7 = newStatus(SUBMITTED, status6)
    it(
      'changes to submitted status',
      () => expect(status7).toEqual({
        changed: true,
        valid: false,
        invalid: true,
        validating: false,
        submitting: false,
        submitted: true,
      })
    )
  }
)

