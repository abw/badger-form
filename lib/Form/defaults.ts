import { ReactNode } from 'react'
import { SUBMITTING, VALIDATING } from '../Constants'

export const errorsTitle = (n: number): ReactNode =>
  `Form Error${n > 1 ? 's' : ''}`

export const errorsPrompt = (n: number): ReactNode =>
  `Please correct ${n === 1 ? 'this problem' : 'these problems'} and re-submit:`

// Default options only used inside the form context model
export const formModelDefaults = {
  focusInvalidField: true
}

// Default options that are also forwarded to form consumers
export const formRenderDefaults = {
  submittingClass:   SUBMITTING,
  validatingClass:   VALIDATING,
  resetOnSuccess:    true,
  enctype:           'application/x-www-form-urlencoded',
  method:            'post',
  errorsTitle,
  errorsPrompt,
}

// Combined set of above
export const formDefaults = {
  ...formModelDefaults,
  ...formRenderDefaults
}