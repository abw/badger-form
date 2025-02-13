import { PropsWithRender } from '@abw/react-context'
import { ChangeEvent, ReactNode } from 'react'
import { FormAllProps, FormErrorItem } from '../Form/types'
import { FieldStatusFlags, StateCallback, VoidFunction } from '../types'
import { fieldModelDefaults, fieldRenderDefaults } from './defaults'

export type FieldModelDefaults = typeof fieldModelDefaults
export type FieldRenderDefaults = typeof fieldRenderDefaults

export type FieldProps = {
  form: FormAllProps
  id: string
  name: string,
  value?: FieldValue
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
  message?: string
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
  prepareValue?: (input: FieldValue) => FieldValue
  validate: FieldValidateFunction
  onLoad: FieldContextFunction
  onFocus?: FieldContextFunction
  onBlur?: FieldContextFunction
  onChange: FieldContextFunction
  onValid?: FieldContextFunction
  onInvalid?: FieldContextFunction
  onUnvalidate?: FieldContextFunction
  onReset?: FieldContextFunction
  Layout?: React.FC
  Label?: React.FC
  Message?: React.FC
  Prefix?: React.FC
  Suffix?: React.FC
  Input?: React.FC
} & Partial<FieldModelDefaults>
  & Partial<FieldRenderDefaults>

export type FieldSpec = Partial<Omit<FieldProps, 'form'>>
export type InputType = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
/*
export type FieldRenderProps = FieldProps
export type FieldRenderProps = {
  inputRef: React.RefObject<InputType>
  // message: ReactNode     // TODO
} & FieldProps
*/

export type FieldState = {
  // TODO: more
  status: FieldStatusFlags
  value?: FieldValue
  message?: string | null
  initialValue?: FieldValue
  error: null | FormErrorItem
}
export type FieldValue = string | number | boolean | object | undefined | null
export type FieldValues = Record<string, FieldValue>

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
  onChange: (value: string | boolean) => void
  onFocus: VoidFunction
  onBlur: VoidFunction
  // onLoad: (form: FieldContext) => void
  // onLoad: FieldContextFunction
  // onFocus?: FieldContextFunction
  // onBlur?: FieldContextFunction
  // onChange: FieldContextFunction
  // onValid?: FieldContextFunction
  // onInvalid?: FieldContextFunction
  // onUnvalidate?: FieldContextFunction
  // onReset?: FieldContextFunction

  // Not really actions
  inputRef?: React.RefObject<InputType>
  resetRef?: React.RefObject<FieldResetter>
}

export type FieldOnName =
  'load' | 'focus' | 'blur' | 'change' |
  'valid' | 'invalid' | 'unvalidate' | 'reset'

export type FieldOnHandler = () => void
export type FieldOnHandlers = Record<FieldOnName, FieldOnHandler>

export type FieldAllProps = FieldProps & FieldState & FieldActions
export type FieldRenderProps =
  Omit<FieldProps, 'validate' | 'message' | 'onChange' | 'onFocus' | 'onBlur'> &
  FieldState &
  FieldActions
// export type FieldRenderProps = FieldProps & FieldState & Omit<FieldActions, 'onChange'>
//export type FieldConstructorProps = ContextConstructorProps<
//  FieldProps,
//  FieldState,
//  // Omit<FieldActions, 'onChange'>
//  FieldActions
//>
export type FieldConstructorProps = PropsWithRender<
  FieldProps,
  FieldRenderProps
  // FieldProps & FieldState & FieldActions
>

export type FieldContextFunction = (field: FieldRenderProps) => void
export type FieldChangeHandler<Input=InputType> = (field: FieldRenderProps) =>
  (e: ChangeEvent<Input>) => void

// export type FieldInputValue = boolean | number | string | null | undefined
export type FieldResetter = {
  reset: () => void
}

export type FieldValidateFunction = (
  value: FieldValue,
  field: FieldRenderProps,
  resolve: FieldValidateResolve,
  reject: FieldValidateReject
) => Promise<FieldValidateResult>

export type FieldValidateResult = {
  name?: string
  value?: FieldValue,
  message?: string | null,
  reason?: string | null
  status?: FieldStatusFlags
  data?: object
}
export type FieldValidateResolve = (submit: FieldValidateResult) => void
export type FieldValidateReject = (submit: FieldValidateResult) => void

export type FieldValidator = (
  resolve: (submit: FieldValidateResult) => void,
  reject: (submit: FieldValidateResult) => void
) => void

//export type FieldValidateResponse = {
//} & FieldValidateResult



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
