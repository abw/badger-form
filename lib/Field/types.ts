import { ReactNode } from 'react'
import { fieldModelDefaults, fieldRenderDefaults } from './defaults'
import { FieldStatusFlags, StateCallback } from '../types'
import { ContextConstructorProps } from '@abw/react-context'

export type FieldModelDefaults = typeof fieldModelDefaults
export type FieldRenderDefaults = typeof fieldRenderDefaults

export type FieldProps = {
  // TODO
  // fields
  // values
  // hidden
  // children
  id: string
  debug?: boolean
  required?: boolean
  optional?: boolean
  disabled?: boolean
  label?: string,
  labelClass?: string,
  prefix?: string
  prefixClass?: string
  suffix?: string
  suffixClass?: string
  help?: ReactNode
  resetOnSuccess?: boolean
  unvalidateOnSuccess?: boolean
  validateOnBlur?: boolean
  validateOnChange?: boolean
  minValidateLength?: number
  showRequired?: boolean
  requiredLabel?: ReactNode
  requiredMessage?: ReactNode
  showOptional?: boolean
  optionalLabel?: ReactNode
  focusInvalidField?: boolean
} & Partial<FieldModelDefaults>
  & Partial<FieldRenderDefaults>

export type FieldRenderProps = {
  message: ReactNode     // TODO
} & FieldProps

export type FieldState = {
  // TODO: more
  status: FieldStatusFlags,
  initialValue: unknown
}
export type AddFieldState = Partial<FieldState> | AddFieldStateFn
export type AddFieldStateFn = (state: FieldState) => Partial<FieldState>
export type FieldStateSetter = (state?: AddFieldState, callback?: StateCallback) => void


export type FieldActions = {
  // TODO: more
  reset: () => void
  validate: () => void,
  unvalidate: () => void
  setChangedState: FieldStateSetter
  setValidatingState: FieldStateSetter
  setInvalidState: FieldStateSetter
  setValidState: FieldStateSetter
  setUnvalidatedState: FieldStateSetter
  setFocusState: FieldStateSetter
  setBlurState: FieldStateSetter
  setDisabledState: FieldStateSetter
  setEnabledState: FieldStateSetter
  setResetState: FieldStateSetter
}

export type FieldConstructorProps = ContextConstructorProps<
  FieldProps,
  FieldState,
  FieldActions
>

export interface UseFieldProps {
  children?: ReactNode
}

export type LabelCSSProperties = {
  '--required-text'?: string
  '--optional-text'?: string | number
} & React.CSSProperties
