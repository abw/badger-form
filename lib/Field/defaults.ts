import { REQUIRED_MSG, REQUIRED, OPTIONAL } from '../Constants'

// Default options only used inside the field context model
export const fieldModelDefaults = {
}

// Default options that are also forwarded to form consumers
export const fieldRenderDefaults = {
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

// Combined set of above
export const fieldDefaults = {
  ...fieldModelDefaults,
  ...fieldRenderDefaults
}