import { ChangeEvent } from 'react'
import { FieldChangeHandler, FieldRenderProps } from '../Field/types'

export const defaultHandler: FieldChangeHandler<HTMLInputElement> = (field: FieldRenderProps) =>
  (e: ChangeEvent<HTMLInputElement>) => field.onChange(e.target.value)

export const checkboxHandler = (field: FieldRenderProps) =>
  (e: ChangeEvent<HTMLInputElement>) => field.onChange(e.target.checked)

export const selectHandler: FieldChangeHandler<HTMLSelectElement> = (field: FieldRenderProps) =>
  (e: ChangeEvent<HTMLSelectElement>) => field.onChange(e.target.value)

export const InputHandlers = {
  default:  defaultHandler,
  checkbox: checkboxHandler,
  select: selectHandler
}

export default InputHandlers