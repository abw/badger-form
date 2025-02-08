import { ReactNode } from 'react'
import { CHANGED, FOCUS, INVALID, RESET, SUBMITTED, SUBMITTING, UNVALIDATED, VALID, VALIDATING } from './Constants'
import { ContextConstructorProps, ContextDebugOptions, ContextProps } from '@abw/react-context'

export type ContextStatus =
  typeof CHANGED |
  typeof FOCUS |
  typeof INVALID |
  typeof RESET |
  typeof SUBMITTED |
  typeof SUBMITTING |
  typeof UNVALIDATED |
  typeof VALID |
  typeof VALIDATING

export type StatusFlags = Partial<Record<ContextStatus, boolean>>
export type StatusSets = Record<string, StatusFlags>
export type NewStatus = (status: string, oldStatus?: StatusFlags) => StatusFlags
export type HasStatusProps = StatusFlags & {
  status: StatusFlags,
  not?: boolean,
  any?: boolean,
}

// NOTE: moved to form/types.ts
export type AddState<State> = Partial<State> | AddStateFn<State>
export type AddStateFn<State> = (oldState: Partial<State>) => Partial<State>
export type StateCallback = () => void
export type ContextState = {
  status: StatusFlags
}
// export type BaseContextProps = ContextProps<ContextDebugOptions>
export type BaseContextProps = { } //ContextProps<{ i?: number }>
export type BaseContextState = {
  status?: StatusFlags
}
export type BaseContextConstructorProps = ContextConstructorProps<
  BaseContextProps,
  BaseContextState
>

// export type BaseContextProps = ContextProps<{ }>
//export type FormContextProps = {
//    // onLoad:
//}

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