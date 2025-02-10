import { inputAttrs, inputClasses, valueOption } from '../Utils.js'
import { useField } from '../Field/Context.js'
import { isBoolean } from '@abw/badger-utils'
// import Handlers from './Handlers.js'

export const Select = () => {
  const field = useField()
  const {
    value,
    placeholder,
    disabled,
    tabIndex,
    inputRef,
    required,
    onChange,
    options=[],
    optionClass='option',
    // handler=Handlers.select
  } = field
  const attrs = inputAttrs(field)

  return (
    <select
      ref={inputRef as React.RefObject<HTMLSelectElement>}
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : tabIndex}
      className={inputClasses(field)}
      // onChange={handler(field)}
      onChange={e => onChange(e.target.value)}
      {...attrs}
      value={
        isBoolean(value)
          ? (value ? 1 : 0)
          : value
      }
      required={required || Boolean(placeholder)}  // allows styling via :invalid for placeholder
    >
      { Boolean(placeholder) &&
        <option value="" hidden disabled>{placeholder}</option>
      }
      { options.map(
        option => {
          option = valueOption(option)
          return (
            <option
              key={option.value}
              className={optionClass}
              value={option.value}
              disabled={option.disabled}
            >
              {option.text}
            </option>
          )
        }
      )}
    </select>
  )
}

export default Select
