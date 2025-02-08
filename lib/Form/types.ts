// import { ContextProps } from '@abw/react-context'
import { ReactNode } from 'react'
import { formModelDefaults, formRenderDefaults } from './defaults'
import { StatusFlags } from '../types'
import { ContextConstructorProps } from '@abw/react-context'

export type FormModelDefaults = typeof formModelDefaults
export type FormRenderDefaults = typeof formRenderDefaults

export type FormProps = {
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
} & Partial<FormModelDefaults>
  & Partial<FormRenderDefaults>

export type FormRenderProps = {
  message: string     // TODO
} & FormProps

export type FormState = {
  // TODO: more
  status: StatusFlags
}

export type AddFormState = Partial<FormState> | AddFormStateFn
export type AddFormStateFn = (state: FormState) => Partial<FormState>

export type FormActions = {
  // TODO: more
  reset: () => void
  validate: () => void,
  unvalidate: () => void
}

export type FormConstructorProps = ContextConstructorProps<
  FormProps,
  FormState,
  FormActions
>