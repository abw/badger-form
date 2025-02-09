import { CommonContextStatus, FieldContextStatus, FormContextStatus } from './types'

export const BLANK        = ''
export const BLUR         = 'blur'
export const CHANGED      = 'changed'
export const CHECKBOX     = 'checkbox'
export const CLEAN        = 'clean'
export const CONTROLS     = 'controls'
export const CUSTOM       = 'custom'
export const DIRTY        = 'dirty'
export const DISABLED     = 'disabled'
export const ENABLED      = 'enabled'
export const FOCUS        = 'focus'
export const FULFILLED    = 'fulfilled'
export const INVALID      = 'invalid'
export const OPTIONAL     = 'Optional'
export const RADIO        = 'radio'
export const REQUIRED     = 'Required'
export const REQUIRED_MSG = 'A value is required'
export const RESET        = 'reset'
export const RESET_DISABLED = 'resetDisabled'
export const SELECT       = 'select'
export const SUBMITTED    = 'submitted'
export const SUBMITTING   = 'submitting'
export const TEXT         = 'text'
export const TEXTAREA     = 'textarea'
export const UNVALIDATED  = 'unvalidated'
export const VALID        = 'valid'
export const VALIDATE     = 'validate'
export const VALIDATING   = 'validating'
export const INPUT_ATTRS  = [
  'id', 'name', 'type', 'value', 'checked', 'disabled', 'placeholder',
  'autoComplete', 'onFocus', 'onBlur', 'size', 'rows', 'min', 'max', 'step',
  'minLength', 'maxLength', 'pattern', 'list'
]
export const FORM_ATTRS = [
  'id', 'name', 'action', 'method', 'encType'
]
export const COMMON_HAS_STATUS: CommonContextStatus[] = [
  CHANGED,
  VALIDATING,
  VALID,
  INVALID,
]
export const FORM_HAS_STATUS: FormContextStatus[] = [
  ...COMMON_HAS_STATUS,
  SUBMITTING,
  SUBMITTED
]
export const FIELD_HAS_STATUS: FieldContextStatus[] = [
  ...COMMON_HAS_STATUS,
  FOCUS,
  DISABLED
]
