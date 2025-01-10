import React from 'react'
import Handlers from './Handlers.js'
import { inputAttrs, inputClasses, valueOption } from '../Utils'
import { useField } from '../Field/Context.js'

const Select = ({ field=useField() }) => {
  const {
    options=[],
    placeholder,
    type='select',
    optionClass='option',
    handler=Handlers[type]||Handlers.default
  } = field
  const attrs = inputAttrs(field)

  return (
    <select
      ref={field.inputRef}
      aria-disabled={field.disabled}
      tabIndex={field.disabled ? -1 : field.tabIndex}
      className={inputClasses(field)}
      onChange={handler(field)}
      {...attrs}
      value={field.value}
      required={field.required || Boolean(placeholder)}  // allows styling via :invalid for placeholder
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
