import { PropsWithRender } from '@abw/react-context'
import { ChangeEvent, ReactNode } from 'react'
import { FormErrorItem, FormRenderProps } from '../Form/types'
import { fieldModelDefaults, fieldRenderDefaults } from './defaults'
import { EventWithPreventDefault, FieldChildren, FieldStatusFlags, StateCallback, VoidFunction } from '../types'

export type FieldModelDefaults = typeof fieldModelDefaults
export type FieldRenderDefaults = typeof fieldRenderDefaults

export type FieldProps = {
  form: FormRenderProps
  id: string
  name: string,
  value?: FieldValue
  default?: FieldValue
  debug?: boolean
  required?: boolean
  optional?: boolean
  disabled?: boolean
  wide?: boolean
  className?: string,
  label?: string,
  labelClass?: string,
  prefix?: ReactNode
  prefixClass?: string
  suffix?: ReactNode
  suffixClass?: string
  help?: ReactNode
  tabIndex?: number
  message?: string
  placeholder?: string
  autocomplete?: string
  size?: number | string
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
  validMessage?: string | null
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

export type FieldState = {
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
  validate: () => void,
  unvalidate: () => void
  reset: (e?: EventWithPreventDefault) => void
  onChange: (value: FieldValue) => void
  onFocus: VoidFunction
  onBlur: VoidFunction
  setFocus: (e?: EventWithPreventDefault) => void
  setValue: (value: FieldValue, event?: EventWithPreventDefault) => void
  setValid: (message?: string, e?: EventWithPreventDefault) => void
  setInvalid: (message?: string, e?: EventWithPreventDefault) => void
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
export type FieldContextItems =
  Omit<FieldProps, 'validate' | 'message' | 'onChange' | 'onFocus' | 'onBlur'> &
  FieldState &
  FieldActions

export type FieldConstructorProps = PropsWithRender<
  FieldProps,
  FieldContextItems
>

export type FieldContextFunction = (field: FieldContextItems) => void
export type FieldChangeHandler<Input=InputType> = (field: FieldContextItems) =>
  (e: ChangeEvent<Input>) => void

// export type FieldInputValue = boolean | number | string | null | undefined
export type FieldResetter = {
  reset: () => void
}

export type FieldValidateFunction = (
  value: FieldValue,
  field: FieldContextItems,
  resolve: FieldValidateResolve,
  reject: FieldValidateReject
) => void | FieldValidateResult | Promise<FieldValidateResult>

export type FieldValidateResult = FieldValue | FieldValidateResultObject
export type FieldValidateResultObject = {
  name?: string
  value?: FieldValue,
  message?: string | null,
  reason?: string | null
  status?: FieldStatusFlags
  data?: object
}

export type FieldValidateResolve = (submit: FieldValidateResultObject) => void
export type FieldValidateReject = (submit: FieldValidateResultObject) => void

export type FieldValidator = (
  resolve: (submit: FieldValidateResultObject) => void,
  reject: (submit: FieldValidateResultObject) => void
) => void

export type UseFieldWith<MoreItems=object> = FieldContextItems & MoreItems

export interface UseFieldProps {
  children?: FieldChildren
}

export interface FieldLayoutProps {
  children?: ReactNode
}

export type SelectOption = string | number | SelectOptionObject
export type SelectOptionObject = {
  value: string | number | null
  text?: ReactNode
  className?: string
  disabled?: boolean
}

export type LabelCSSProperties = {
  '--required-text'?: string
  '--optional-text'?: string | number
} & React.CSSProperties
