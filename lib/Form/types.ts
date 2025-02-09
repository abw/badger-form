import { FormEvent, MouseEventHandler, ReactNode } from 'react'
import { formModelDefaults, formRenderDefaults } from './defaults'
import { FormStatusFlags, StateCallback } from '../types'
import { ContextConstructorProps } from '@abw/react-context'

export type FormModelDefaults = typeof formModelDefaults
export type FormRenderDefaults = typeof formRenderDefaults

export type FormProps = {
  // TODO
  // fields
  // values
  // hidden
  // children
  values?: Record<string, unknown>
  hidden?: Record<string, unknown>
  className?: string
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
  status: FormStatusFlags
  initialValues: Record<string, unknown>
  values: Record<string, unknown>
}

export type AddFormState = Partial<FormState> | AddFormStateFn
export type AddFormStateFn = (state: FormState) => Partial<FormState>

export type FormStateSetter = (state?: AddFormState, callback?: StateCallback) => void

export type FormActions = {
  // TODO: more
  reset: () => void
  validate: () => void,
  unvalidate: () => void
  setResetState: FormStateSetter
  setChangedState: FormStateSetter
  setValidatingState: FormStateSetter
  setValidState: FormStateSetter
  setInvalidState: FormStateSetter
  setUnvalidatedState: FormStateSetter
  setSubmittingState: FormStateSetter
  setSubmittedState: FormStateSetter
  submit: (event?: FormEvent<HTMLFormElement>) => void
  // submit: (event: FormSubmitEvent) => void
  // submit: () => void
  // submit: (event: SubmitEvent) => void
}

export type FormSubmitEvent = FormEvent<HTMLFormElement> | MouseEventHandler<HTMLButtonElement>

export type FormConstructorProps = ContextConstructorProps<
  FormProps,
  FormState,
  FormActions
>

export interface FormComponentProps extends FormProps {
  Layout?: FormLayoutComponent,
  children?: ReactNode
}

export interface FormLayoutProps {
  children?: ReactNode
}

export interface FormChangedProps {
  children?: ReactNode
}

export interface FormStatusProps extends FormStatusFlags {
  any?: boolean
  all?: boolean
  children?: ReactNode
}

export interface FormDebugProps extends
  Omit<FormDebugTableProps, 'rows' |'children'> {
  values?: boolean
  status?: boolean
  all?: boolean
  className?: string
  title?: string
  valuesTitle?: string
  statusTitle?: string
  titleClass?: string
  valuesTitleClass?: string
  statusTitleClass?: string
}

export interface FormDebugTableProps extends
  Omit<FormDebugRowProps, 'name' | 'value'> {
  rows: [string, unknown][]
  children?: ReactNode
  color?: string
  tableClass?: string
}

export interface FormDebugRowProps {
  name: string
  value: unknown
  keyClass?: string
  valueClass?: string
}

export interface FormDebugValueProps {
  value?: unknown
}

export interface UseFormProps {
  children?: ReactNode
}


export type FormLayoutComponent = React.FC<FormLayoutProps>
