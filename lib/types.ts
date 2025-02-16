import { ReactNode } from 'react'
import {
  BLUR, CHANGED, DISABLED, ENABLED, FOCUS, INVALID, RESET, RESET_DISABLED,
  SUBMITTED, SUBMITTING, UNVALIDATED, VALID, VALIDATING
} from './Constants'
import { FieldProps, FieldContextItems } from './Field/types'
import { FieldSchema, FormProps, FormRenderProps } from './Form/types'
import { RenderChild } from '@abw/react-context'

/**
  The form and field contexts maintain a status: { ... } object which
  contain a number of boolean flags indicating the current status.
  The `changed`, `validating`, `valid` and `invalid` flags are common
  to both.
*/
export type CommonContextStatus =
  typeof CHANGED |
  typeof INVALID |
  typeof VALID |
  typeof VALIDATING

/**
  In addition to the `CommonContextStatus` flags, the form context has
  additional `status` flags to indicate that it's currently `submitting`
  or has been `submitted`.
 */
export type FormContextStatus =
  CommonContextStatus |
  typeof SUBMITTED |
  typeof SUBMITTING
  // typeof UNVALIDATED

/**
  In addition to the `CommonContextStatus` flags, the field context has
  additional `status` flags to indicate that it currently has `focus` or
  is `disabled`.
*/
export type FieldContextStatus =
  CommonContextStatus |
  typeof FOCUS |
  typeof DISABLED

/**
  The `status` object in a form or field context has the
  `FormContextStatus` or `FieldContextStatus` flags as keys and corresponding
  boolean values.
 */
export type StatusFlags<
  Flags extends string = CommonContextStatus
> =
  Partial<
    Record<Flags, boolean>
  >

/**
  The `status` object for a form context.
*/
export type FormStatusFlags = StatusFlags<FormContextStatus>

/**
  The `status` object for a field context.
*/
export type FieldStatusFlags = StatusFlags<FieldContextStatus>

/**
  The form and field contexts have `setStatus` methods which accept a
  string as the first argument indicating how the status should be changed.
  These are the common status transitions.
 */
export type CommonStatusChange =
  typeof CHANGED |
  typeof VALIDATING |
  typeof INVALID |
  typeof VALID

/**
  In addition to the `CommonStatusChange` transitions, the `setStatus` method
  in the form context accepts several other status transition strings.
 */
export type FormStatusChange =
  CommonStatusChange |
  typeof SUBMITTING |
  typeof SUBMITTED |
  typeof UNVALIDATED |
  typeof RESET

/**
  In addition to the `CommonStatusChange` transitions, the `setStatus` method
  in the field context accepts several other status transition strings.
 */
export type FieldStatusChange =
  CommonStatusChange |
  typeof FOCUS |
  typeof BLUR |
  typeof UNVALIDATED |
  typeof RESET |
  typeof RESET_DISABLED |
  typeof DISABLED |
  typeof ENABLED

/**
  Generic type for mapping status change strings to the corresponding status
  flags.
 */
export type StatusSets<
  Changes extends string = CommonStatusChange,
  Flags = StatusFlags
> = Record<Changes, Flags>

/**
  Table mapping the `FormStatusChange` strings to sets of `FormStatusFlags`
  that are applied to the form context `status` object.
 */
export type FormStatusSets = StatusSets<
  FormStatusChange,
  FormStatusFlags
>

/**
  Table mapping the `FieldStatusChange` strings to sets of `FieldStatusFlags`
  that are applied to the field context `status` object.
 */
export type FieldStatusSets = StatusSets<
  FieldStatusChange,
  FieldStatusFlags
>

/**
  General purpose type for a function that takes no arguments and returns void.
 */
export type VoidFunction = () => void

/**
  Alias for `VoidFunction` - a function with no arguments returning void.
 */
export type StateCallback = VoidFunction

/**
  General purpose type for an event that has a `preventDefault()` method.
 */
export type EventWithPreventDefault = {
  preventDefault: () => void
}

/*
export type NewStatus<
  Status,
  Flags
> = (
  status: Status,
  oldStatus?: Flags
) => Flags
*/
// export type NewFormStatus = NewStatus<FormStatusChanges, FormStatusFlags>

export type HasStatusProps<Flags> = Flags & {
  status: Flags,
  not?: boolean,
  any?: boolean,
}
export type FormHasStatusProps = HasStatusProps<FormStatusFlags>
export type FieldHasStatusProps = HasStatusProps<FieldStatusFlags>


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


export type FormChildren = React.ReactNode |
  RenderChild<FormRenderProps> |
  Array< React.ReactNode | RenderChild<FormRenderProps> >

export interface FormComponentProps extends FormProps {
  // Layout?: FormLayoutComponent,  // Now in context props
  // children?: ReactNode
  children?: FormChildren
}

export type FieldChildren = React.ReactNode |
  RenderChild<FieldContextItems> |
  Array< React.ReactNode | RenderChild<FieldContextItems> >

export interface FieldComponentProps extends FieldSchema {
  name: string,
  // children?: ReactNode,
  children?: FieldChildren
}

export interface FieldsComponentProps extends Partial<FieldProps> {
  names: string | string[]
  className?: string
  grid?: boolean | number
  gap?: number | string
  stack?: string
  wide?: boolean
  // ...props
}

export interface FieldsetComponentProps extends Partial<FieldProps>{
  fields?: string | string[],
  className?: string,
  legend?: string,
  children?: ReactNode,
}

/*
export type FormButtonComponent = React.FC<FormButtonProps>

export type HTMLButtonAttrs = React.ComponentPropsWithoutRef<'button'>
*/