import { ChangeEvent } from 'react'
import { FieldAllProps, FieldChangeHandler } from '../Field/types'

export const defaultHandler: FieldChangeHandler<HTMLInputElement> = (field: FieldAllProps) =>
  (e: ChangeEvent<HTMLInputElement>) => field.onChange(e.target.value)

export const checkboxHandler = (field: FieldAllProps) =>
  (e: ChangeEvent<HTMLInputElement>) => field.onChange(e.target.checked)

export const selectHandler: FieldChangeHandler<HTMLSelectElement> = (field: FieldAllProps) =>
  (e: ChangeEvent<HTMLSelectElement>) => field.onChange(e.target.value)

export const InputHandlers = {
  default:  defaultHandler,
  checkbox: checkboxHandler,
  select: selectHandler
}

export default InputHandlers