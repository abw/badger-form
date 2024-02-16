export const defaultHandler = field =>
  e => field.onChange(e.target.value)

export const checkboxHandler = field =>
  e => field.onChange(e.target.checked)

export const InputHandlers = {
  default:  defaultHandler,
  checkbox: checkboxHandler,
}

export default InputHandlers