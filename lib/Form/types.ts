import { FormContext } from './Context'
import { FieldContext } from '../Field/Context'
import { PropsWithRender } from '@abw/react-context'
import { FormChildren, FormStatusFlags, StateCallback } from '../types'
import { FieldProps, FieldValue, FieldValues } from '../Field/types'
import { formModelDefaults, formRenderDefaults } from './defaults'
import { FormEvent, MouseEventHandler, ReactNode } from 'react'

export type FormModelDefaults = typeof formModelDefaults
export type FormRenderDefaults = typeof formRenderDefaults

export type FormProps = {
  // TODO
  // children
  fields?: FieldsSchemas
  values?: FieldValues
  hidden?: FieldValues
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
  // validate?: (values: FieldValues, form: FormRenderProps) => Promise<FieldValues>
  validate?: FormValidateFunction
  onLoad?: (form: FormContext) => void
  onReset?: () => void
  onValid?: () => void
  // onSubmit?: (values: FieldValues, form: FormRenderProps) => FormSubmitResponse | Promise<FormSubmitResponse>
  onSubmit?: FormSubmitHandler
  onSuccess?: (response: FormSubmitResponse, form: FormContext) => void
  onError?: (error: FormSubmitError) => void
  onFailure?: (error: FormSubmitError) => void
  Error?: FormErrorComponent
  Layout?: FormLayoutComponent
} & Partial<FormModelDefaults>
  & Partial<FormRenderDefaults>


export type FieldSchema = Partial<Omit<FieldProps, 'form'>>
export type FieldsSchemas = Record<string, FieldSchema>
export type FieldSpecProps = Omit<
  FieldProps, 'form' | 'id'
> & {
  id?: FieldProps['id']
}

export type FormState = {
  error?: FormErrorItem | null
  errors: FormErrorItem[]
  status: FormStatusFlags
  initialValues: Record<string, FieldValue>
  values: Record<string, FieldValue>
  hidden?: Record<string, FieldValue>
  submit?: FormSubmitData
}

export type AddFormState = Partial<FormState> | AddFormStateFn
export type AddFormStateFn = (state: FormState) => Partial<FormState>
export type FormStateSetter = (state?: AddFormState, callback?: StateCallback) => void

export type FormActions = {
  // TODO: more
  fieldSpec: (name: string, props: Partial<FieldProps>) => FieldSpecProps
  attachField: (name: string, field: FieldContext) => void
  detachField: (name: string) => void
  reset: () => void
  submit: (event?: FormEvent<HTMLFormElement>) => void
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
  setValue: (name: string, value: FieldValue) => FieldValue
  setValues: (values: FieldValues, event?: Event) => void
/*
    'setFocus',
    'setValues',
    'setHidden',
    // should this be kept internal?
    'setStatus',
    'handleError'
    */
}
export type FormAllProps = FormProps & FormState & FormActions
export type FormRenderProps =
  Omit<FormProps, 'validate'> &
  Omit<FormState, 'submit'> &
  FormActions

export type FormConstructorProps = PropsWithRender<
  FormProps,
  FormRenderProps
>

export type FormSubmitEvent = FormEvent<HTMLFormElement> | MouseEventHandler<HTMLButtonElement>
export type FormSubmitData = {
  values: FieldValues,
  errors: FormErrorItem[]
}
export type FormSubmitResponse = {
  ok?: boolean
  status?: number
  data?: object
}

export type FormSubmitError = {
  error?: string
  errors?: FormErrorObjectItem[]
}

export type FormSubmitHandler = (values: FieldValues, form: FormRenderProps)
  => FormSubmitResponse | Promise<FormSubmitResponse>

export type FormValidateFunction = (values: FieldValues, form: FormRenderProps) => Promise<FieldValues>

export type FormValidator = (
  resolve: (submit: FormSubmitData) => void,
  reject: (submit: FormSubmitData) => void
) => void

export type FormValidatorResults = {
  values: FieldValues
  errors: FormErrorItem[ ],
}

export interface FormLayoutProps {
  children?: FormChildren
}

export interface FormChangedProps {
  children?: ReactNode
}

export interface FormStatusProps extends FormStatusFlags {
  any?: boolean
  all?: boolean
  not?: boolean
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
  // various different ways to specify the field name
  label?: string
  name?: string
  param?: string
  field?: string
  // different way to specify the error message
  message?: string
  error?: string
}

export type ErrorsTitle = ReactNode | ErrorsTitleFn
export type ErrorsPrompt = ReactNode | ErrorsPromptFn
export type ErrorsTitleFn = (n: number) => ReactNode
export type ErrorsPromptFn = (n: number) => ReactNode

export type FormLayoutComponent = React.FC<FormLayoutProps>
export type FormErrorComponent = React.FC<FormErrorProps>
