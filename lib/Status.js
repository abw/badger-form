import {
  CHANGED, DISABLED, FOCUS, INVALID, SUBMITTED, SUBMITTING, VALID, VALIDATING
} from './Constants.jsx'

// Forms and fields maintain a status in their internal state which contains
// boolean flags to indicate if the component is changed, valid, focussed,
// etc.
const unvalidated = {
  [VALID]: false,
  [INVALID]: false,
}
const changed = {
  ...unvalidated,
  [CHANGED]: true
}
const validating = {
  ...unvalidated,
  [VALIDATING]: true
}
const invalid = {
  [VALID]: false,
  [INVALID]: true,
  [VALIDATING]: false
}
const valid = {
  [VALID]: true,
  [INVALID]: false,
  [VALIDATING]: false
}
const blur = {
  [FOCUS]: false
}
const focus = {
  [FOCUS]: true
}
const submitting = {
  [SUBMITTING]: true,
  [SUBMITTED]: false
}
const submitted = {
  [SUBMITTING]: false,
  [SUBMITTED]: true
}

// Some of these states are common to both forms and fields.
const commonStatusChanges = {
  changed, validating, invalid, valid
}

// Factory to return a function to select a new status
const newStatus = statusChanges =>
  (status, oldStatus={}) => ({
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
    reset, submitting, submitted
  })
}

// Factory to return a function to select a new field status
export const newFieldStatus = (props={}) => {
  const reset = {
    ...unvalidated,
    [CHANGED]:    false,
    [VALIDATING]: false,
    [FOCUS]:      false,
    [DISABLED]:   props.disabled || false
  }
  return newStatus({
    ...commonStatusChanges,
    reset, focus, blur
  })
}

