import { REQUIRED_MSG, REQUIRED, OPTIONAL, TEXT } from '../Constants'

// Default options only used inside the field context model
export const fieldModelDefaults = {
  validateOnChange:  false,
  validateOnBlur:    false,
  validateOnInvalid: true,
}

// Default options that are also forwarded to form consumers
export const fieldRenderDefaults = {
  type:              TEXT,
  showRequired:      false,
  showOptional:      false,
  // validMessage:      null,
  minValidateLength: 1,
  messageClass:      'help',
  requiredMessage:   REQUIRED_MSG,
  requiredLabel:     REQUIRED,
  optionalLabel:     OPTIONAL,
}

// Combined set of above
export const fieldDefaults = {
  ...fieldModelDefaults,
  ...fieldRenderDefaults
}