import { FormEvent, MouseEventHandler, ReactNode } from 'react'
import { formModelDefaults, formRenderDefaults } from './defaults'
import { FormStatusFlags, StateCallback } from '../types'
import { ContextConstructorProps } from '@abw/react-context'
import { FieldProps } from '../Field/types'

// TODO
// * fields
// * onLoad
// * props.fields

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
  errorsTitle?: ErrorsTitle,
  errorsPrompt?: ErrorsPrompt,
  Error?: FormErrorComponent
  Layout?: FormLayoutComponent
} & Partial<FormModelDefaults>
  & Partial<FormRenderDefaults>

export type FieldSpecProps = Omit<
  FieldProps, 'form' | 'id'
> & {
  id?: FieldProps['id']
}

// type MakePropertyOptional<T, K extends keyof T> = Omit<T, K> & { [P in K]?: T[P] };

export type FormRenderProps = {
  fieldSpec: (name: string, props: Partial<FieldProps>) => FieldSpecProps
  message: string     // TODO
} & FormProps

export type FormState = {
  // TODO: more
  error?: FormErrorItem | null
  errors: FormErrorItem[]
  status: FormStatusFlags
  initialValues: Record<string, unknown>
  values: Record<string, unknown>
}

// export type SomeFormState = Pick<FormState, keyof FormState>
export type AddFormState = Partial<FormState> | AddFormStateFn
// export type AddFormState = PartialButNotUndefined<FormState> | AddFormStateFn
// export type AddFormState = SomeFormState | AddFormStateFn
export type AddFormStateFn = (state: FormState) => Partial<FormState>
// export type AddFormStateFn = (state: FormState) => SomeFormState

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

export type FormAllProps = FormRenderProps & FormState & FormActions

export interface FormComponentProps extends FormProps {
  // Layout?: FormLayoutComponent,  // Now in context props
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

export interface FormErrorsProps {
  // form = useForm(),
  title?: ErrorsTitle
  prompt?: ErrorsPrompt
  fieldErrors?: boolean
  className?: string
}

export interface FormErrorProps {
  error: FormErrorItem
}

export interface FormErrorObjectProps {
  error: FormErrorObjectItem
}

export type FormErrorItem = string | FormErrorObjectItem
export type FormErrorObjectItem = {
  label?: string
  name?: string
  message?: string
}
// } & Record<string, unknown>

export type ErrorsTitle = ReactNode | ErrorsTitleFn
export type ErrorsPrompt = ReactNode | ErrorsPromptFn
export type ErrorsTitleFn = (n: number) => ReactNode
export type ErrorsPromptFn = (n: number) => ReactNode

export type FormLayoutComponent = React.FC<FormLayoutProps>
export type FormErrorComponent = React.FC<FormErrorProps>
