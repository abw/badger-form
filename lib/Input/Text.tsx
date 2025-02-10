import { inputClasses, inputAttrs } from '../Utils.js'
import { useField } from '../Field/Context.js'
import { TEXT } from '../Constants.js'
// import Handlers from './Handlers'
// import { FieldChangeHandler } from '../Field/types.js'

export const Text = () => {
  const field = useField()
  const {
    type=TEXT,
    disabled,
    tabIndex,
    inputRef,
    onFocus,
    onBlur,
    //handler = (
    //  Handlers[type as keyof typeof Handlers] || Handlers.default
    //) as FieldChangeHandler<HTMLInputElement>
  } = field
  const attrs = inputAttrs(field)

  return (
    <input
      type={type}
      ref={inputRef as React.RefObject<HTMLInputElement>}
      className={inputClasses(field)}
      aria-disabled={disabled}
      // aria-invalid, aria-required
      tabIndex={disabled ? -1 : tabIndex}
      onFocus={onFocus}
      onBlur={onBlur}
      // onChange={handler(field)}
      onChange={e => field.onChange(e.target.value)}
      {...attrs}
    />
  )
}

export default Text

