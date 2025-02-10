import { ChangeEvent, ReactNode } from 'react'
import { fieldModelDefaults, fieldRenderDefaults } from './defaults'
import { FieldStatusFlags, StateCallback } from '../types'
import { ContextConstructorProps } from '@abw/react-context'
import { FormAllProps } from '../Form/types'

export type FieldModelDefaults = typeof fieldModelDefaults
export type FieldRenderDefaults = typeof fieldRenderDefaults

export type FieldProps = {
  // TODO
  // fields
  // values
  // hidden
  // children
  form: FormAllProps
  id: string
  name: string,
  value?: string | number | boolean
  default?: string | number | boolean
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
  tabIndex?: number
  placeholder?: string
  autocomplete?: string
  rows?: number
  cols?: number
  text?: string
  inline?: boolean
  border?: boolean
  switch?: boolean
  round?: boolean
  square?: boolean
  inputsClass?: string
  inputClass?: string
  options?: SelectOption[]
  optionsClass?: string
  optionClass?: string
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
  handler?: FieldChangeHandler
  Layout?: React.FC
  Label?: React.FC
  Message?: React.FC
  Prefix?: React.FC
  Suffix?: React.FC
  Input?: React.FC
} & Partial<FieldModelDefaults>
  & Partial<FieldRenderDefaults>

export type InputType = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
export type FieldRenderProps = {
  inputRef: React.RefObject<InputType>
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
  onFocus: () => void
  onBlur: () => void
  onChange: (value: string | boolean) => void
}

export type FieldConstructorProps = ContextConstructorProps<
  FieldProps,
  FieldState,
  FieldActions
>

export type FieldAllProps = FieldRenderProps & FieldState & FieldActions
export type FieldChangeHandler<Input=InputType> = (field: FieldAllProps) =>
  (e: ChangeEvent<Input>) => void

export interface UseFieldProps {
  children?: ReactNode
}

export interface FieldLayoutProps {
  children?: ReactNode
}

export type SelectOption = {
  value: string | number
  text?: ReactNode
  className?: string
  disabled?: boolean
}

export type LabelCSSProperties = {
  '--required-text'?: string
  '--optional-text'?: string | number
} & React.CSSProperties
