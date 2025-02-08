import {
  OPTIONAL, REQUIRED, REQUIRED_MSG,
  //SUBMITTING, VALIDATING
} from './Constants'

/* Moved to form/defaults.ts
export const errorsTitle = (n: number): ReactNode =>
  `Form Error${n > 1 ? 's' : ''}`

export const errorsPrompt = (n: number): ReactNode =>
  `Please correct ${n === 1 ? 'this problem' : 'these problems'} and re-submit:`

// default properties for a form
export const formDefaultProperties = {
  submittingClass:   SUBMITTING,
  validatingClass:   VALIDATING,
  resetOnSuccess:    true,
  focusInvalidField: true,
  enctype:           'application/x-www-form-urlencoded',
  method:            'post',
  errorsTitle,
  errorsPrompt,
}
*/

// default properties for a field
export const fieldDefaultProperties = {
  validateOnChange:  false,
  validateOnBlur:    false,
  validateOnInvalid: true,
  showRequired:      false,
  showOptional:      false,
  validMessage:      null,
  minValidateLength: 1,
  requiredMessage:   REQUIRED_MSG,
  requiredLabel:     REQUIRED,
  optionalLabel:     OPTIONAL,
}

// properties that can be defined on the form and are inherited by fields
export const formFieldProperties = {
  showRequired:      true,
  requiredLabel:     true,
  showOptional:      true,
  optionalLabel:     true,
  validateOnChange:  true,
  validateOnBlur:    true,
  validateOnInvalid: true,
  minValidateLength: true,
  validMessage:      true,
  requiredMessage:   true,
  classes:           true,
  wide:              true
}

