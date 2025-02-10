import { classes, inputAttrs, inputClasses } from '../Utils.js'
import { useField } from '../Field/Context.js'
// import Handlers from './Handlers.js'
// import { FieldChangeHandler } from '../Field/types.js'

export const Checkbox = () => {
  const field=useField()
  const {
    id,
    text,
    value,
    disabled,
    tabIndex,
    inline,
    border,
    labelClass,
    type='checkbox',
    switch: isSwitch,
    round,
    square,
    inputRef,
    onChange
    //handler = (
    //  Handlers[type as keyof typeof Handlers] || Handlers.default
    //) as FieldChangeHandler<HTMLInputElement>
  } = field
  const attrs = inputAttrs(field)
  const labelClassName = classes(
    'checkbox', labelClass,
    { inline, border }
  )

  return (
    <label htmlFor={id} className={labelClassName}>
      <input
        type={type}
        ref={inputRef as React.RefObject<HTMLInputElement>}
        aria-disabled={disabled}
        tabIndex={disabled ? -1 : tabIndex}
        // onChange={handler(field)}
        onChange={e => onChange(e.target.checked)}
        className={inputClasses(field, { round, square })}
        {...attrs}
        checked={Boolean(value)}
        role={isSwitch ? 'switch' : ''}
      />
      {text}
    </label>
  )
}

export default Checkbox

