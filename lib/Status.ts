import { hasValue } from '@abw/badger-utils'
import {
  CHANGED, DISABLED, FIELD_HAS_STATUS, FOCUS, FORM_HAS_STATUS, INVALID, SUBMITTED, SUBMITTING, VALID, VALIDATING
} from './Constants'
import {
  FieldHasStatusProps, FieldStatusFlags, FieldStatusSets, FormHasStatusProps,
  FormStatusFlags, FormStatusSets, StatusFlags, StatusSets
} from './types'

// Forms and fields maintain a status in their internal state which contains
// boolean flags to indicate if the component is changed, valid, focussed,
// etc.
export const unvalidated: StatusFlags = {
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
const blur: FieldStatusFlags = {
  [FOCUS]: false
}
const focus: FieldStatusFlags = {
  [FOCUS]: true
}
const submitting: FormStatusFlags = {
  [SUBMITTING]: true,
  [SUBMITTED]: false
}
const submitted: FormStatusFlags = {
  [SUBMITTING]: false,
  [SUBMITTED]: true
}

// Some of these states are common to both forms and fields.
const commonStatusChanges: StatusSets = {
  changed, validating, invalid, valid
}

export const formStatusSets: FormStatusSets = {
  ...commonStatusChanges,
  submitting,
  submitted,
  unvalidated,
  reset: {
    ...unvalidated,
    [CHANGED]:    false,
    [VALIDATING]: false,
    [SUBMITTED]:  false,
    [SUBMITTING]: false,
  }
}

export const fieldStatusSets: FieldStatusSets = {
  ...commonStatusChanges,
  focus,
  blur,
  unvalidated,
  reset: {
    ...unvalidated,
    [CHANGED]:    false,
    [VALIDATING]: false,
    [FOCUS]:      false,
    [DISABLED]:   false
  },
  resetDisabled: {
    ...unvalidated,
    [CHANGED]:    false,
    [VALIDATING]: false,
    [FOCUS]:      false,
    [DISABLED]:   true
  },
  disabled: {
    [DISABLED]: true
  },
  enabled: {
    [DISABLED]: false
  }
}

/**
 * Looks for any of the form status values ('changed', 'validating',
 * 'valid', etc) in the `props` and extract the values of those that are
 * truthy from the `status` object.  If the `any` flag is set then the
 * function returns `true` if any of the values are true.  Otherwise, all
 * of the values must be true.  The `not` flag can be used to negate the
 * return value.
 */
export const formHasStatus = ({
  status,
  not=false,
  any=false,
  ...props
}: FormHasStatusProps) =>
  hasStatus(
    FORM_HAS_STATUS
      .filter( state => hasValue(props[state]) )
      .map( state => status[state] ),
    not,
    any
  )

export const fieldHasStatus = ({
  status,
  not=false,
  any=false,
  ...props
}: FieldHasStatusProps) =>
  hasStatus(
    FIELD_HAS_STATUS
      .filter( state => hasValue(props[state]) )
      .map( state => status[state] ),
    not,
    any
  )

export const hasStatus = (
  states: (boolean | undefined)[],
  not: boolean,
  any: boolean
) => {
  const match = any
    ? states.some(Boolean)
    : states.every(Boolean)
  return not
    ? ! match
    : match
}

