import { ChangeEvent } from 'react'
import { FieldChangeHandler, FieldContextItems } from '../Field/types'

export const defaultHandler: FieldChangeHandler<HTMLInputElement> = (field: FieldContextItems) =>
  (e: ChangeEvent<HTMLInputElement>) => field.onChange(e.target.value)

export const checkboxHandler = (field: FieldContextItems) =>
  (e: ChangeEvent<HTMLInputElement>) => field.onChange(e.target.checked)

export const selectHandler: FieldChangeHandler<HTMLSelectElement> = (field: FieldContextItems) =>
  (e: ChangeEvent<HTMLSelectElement>) => field.onChange(e.target.value)

export const InputHandlers = {
  default:  defaultHandler,
  checkbox: checkboxHandler,
  select: selectHandler
}

export default InputHandlers