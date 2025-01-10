import { StatusFlags } from './types'
import { hasValue } from '@abw/badger-utils'
import {
  CHANGED, DISABLED, FOCUS, INVALID, SUBMITTED, SUBMITTING, VALID, VALIDATING
} from './Constants'

// Forms and fields maintain a status in their internal state which contains
// boolean flags to indicate if the component is changed, valid, focussed,
// etc.
const unvalidated: StatusFlags = {
  [VALID]: false,
  [INVALID]: false,
}
const changed: StatusFlags = {
  ...unvalidated,
  [CHANGED]: true
}
const validating: StatusFlags = {
  ...unvalidated,
  [VALIDATING]: true
}
const invalid: StatusFlags = {
  [VALID]: false,
  [INVALID]: true,
  [VALIDATING]: false
}
const valid: StatusFlags = {
  [VALID]: true,
  [INVALID]: false,
  [VALIDATING]: false
}
const blur: StatusFlags = {
  [FOCUS]: false
}
const focus: StatusFlags = {
  [FOCUS]: true
}
const submitting: StatusFlags = {
  [SUBMITTING]: true,
  [SUBMITTED]: false
}
const submitted: StatusFlags = {
  [SUBMITTING]: false,
  [SUBMITTED]: true
}

// Some of these states are common to both forms and fields.
const commonStatusChanges: Record<string, StatusFlags> = {
  changed, validating, invalid, valid
}

// Factory to return a function to select a new status
const newStatus = (statusChanges:  Record<string, StatusFlags>) =>
  (status: string, oldStatus: StatusFlags = { }) => ({
    ...oldStatus,
    ...(statusChanges[status] || { [status]: true })
  })

// Factory to return a function to select a new form status
export const newFormStatus = () => {
  const reset = {
    ...unvalidated,
    [CHANGED]:    false,
    [VALIDATING]: false,
    [SUBMITTED]:  false,
    [SUBMITTING]: false,
  }
  return newStatus({
    ...commonStatusChanges,
    reset, submitting, submitted, unvalidated
  })
}

// Factory to return a function to select a new field status
export const newFieldStatus = (props: { disabled?: boolean, [key: string]: unknown } = { }) => {
  const reset = {
    ...unvalidated,
    [CHANGED]:    false,
    [VALIDATING]: false,
    [FOCUS]:      false,
    [DISABLED]:   props.disabled || false
  }
  return newStatus({
    ...commonStatusChanges,
    reset, focus, blur, unvalidated
  })
}

/**
 * Looks for any of the standard status values ('changed', 'validating',
 * 'valid', etc) in the `props` and extract the values of those that are
 * truthy from the `status` object.  If the `any` flag is set then the
 * function returns `true` if any of the values are true.  Otherwise, all
 * of the values must be true.  The `not` flag can be used to negate the
 * return value.
 */
export const hasStatus = ({
  status,
  not=false,
  any=false,
  ...props
}: {
  status: Record<string, boolean>,
  not?: boolean,
  any?: boolean,
  [key: string]: unknown
}) => {
  const states = [CHANGED, VALIDATING, VALID, INVALID, SUBMITTING, SUBMITTED]
    .filter( state => hasValue(props[state]) )
    .map( state => status[state] )
  const match = any
    ? states.some(Boolean)
    : states.every(Boolean)
  return not
    ? ! match
    : match
}
