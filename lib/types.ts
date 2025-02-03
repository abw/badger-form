import { ReactNode } from 'react'

export type CSSClassItem = string|undefined|null
export type CSSClassHash = Record<string, unknown>
export type CSSClassProps = Array<CSSClassItem|CSSClassHash>

export type FlexGridProps = {
  gap?: string | number,
  space?: boolean,
  stack?: string,
  className?: string
  [key: string]: unknown
}

export type StatusFlags = Record<string, boolean>

export type FormButtonProps = {
  text?: ReactNode
  children?: ReactNode
} & HTMLButtonAttrs

export type FormButtonWrapperProps = {
  Button?: FormButtonComponent
} & FormButtonProps

export type FormCancelProps = FormButtonWrapperProps
export type FormResetProps = FormButtonWrapperProps
export type FormSubmitProps = FormButtonWrapperProps

export type FormButtonsProps = {
  className?: string
  gap?: number
  space?: boolean
  size?: string
}

export type FormResetSubmitProps = {
  reset?: FormResetProps
  submit: FormSubmitProps
} & FormButtonsProps

export type FormCancelSubmitProps = {
  cancel?: FormCancelProps
  submit: FormSubmitProps
} & FormButtonsProps

export type FormCancelResetSubmitProps = {
  cancel?: FormCancelProps
  reset?: FormResetProps
  submit: FormSubmitProps
} & FormButtonsProps

export type FormButtonComponent = React.FC<FormButtonProps>

export type HTMLButtonAttrs = React.ComponentPropsWithoutRef<'button'>