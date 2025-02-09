// import { ContextProps } from '@abw/react-context'
import { ReactNode } from 'react'
import { fieldModelDefaults, fieldRenderDefaults } from './defaults'
import { StatusFlags } from '../types'
import { ContextConstructorProps } from '@abw/react-context'

export type FieldModelDefaults = typeof fieldModelDefaults
export type FieldRenderDefaults = typeof fieldRenderDefaults

export type FieldProps = {
  // TODO
  // fields
  // values
  // hidden
  // children
  debug?: boolean
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
  message: string     // TODO
} & FieldProps

export type FieldState = {
  // TODO: more
  status: StatusFlags
}
export type AddFieldState = Partial<FieldState> | AddFieldStateFn
export type AddFieldStateFn = (state: FieldState) => Partial<FieldState>

export type FieldActions = {
  // TODO: more
  reset: () => void
  validate: () => void,
  unvalidate: () => void
}

export type FieldConstructorProps = ContextConstructorProps<
  FieldProps,
  FieldState,
  FieldActions
>