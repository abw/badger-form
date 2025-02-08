import { ContextStatus } from './types'

export const BLANK        = ''
export const BLUR         = 'blur'
export const CHANGED      = 'changed'
export const CHECKBOX     = 'checkbox'
export const CLEAN        = 'clean'
export const CONTROLS     = 'controls'
export const CUSTOM       = 'custom'
export const DIRTY        = 'dirty'
export const DISABLED     = 'disabled'
export const FOCUS        = 'focus'
export const FULFILLED    = 'fulfilled'
export const INVALID      = 'invalid'
export const OPTIONAL     = 'Optional'
export const RADIO        = 'radio'
export const REQUIRED     = 'Required'
export const REQUIRED_MSG = 'A value is required'
export const RESET        = 'reset'
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
export const HAS_STATUS: ContextStatus[] = [
  CHANGED,
  VALIDATING,
  VALID,
  INVALID,
  SUBMITTING,
  SUBMITTED
]
