import React from 'react'
import { Consumer } from '../Field/Context.jsx'
import { classes, valueOption } from '../Utils.js'

const Select = ({
  wide,
  options,
  inputAttrs,
  inputClass,
  optionClass,
  required,
  placeholder
}) =>
  <select
    {...inputAttrs}
    className={classes(inputClass, { wide })}
    required={required || Boolean(placeholder)}
  >
    { Boolean(placeholder) &&
        <option value="" hidden disabled selected>{placeholder}</option>
    }
    { options.map(
      option => {
        option = valueOption(option)
        return (
          <option
            key={option.value}
            className={classes(optionClass, option.className)}
            value={option.value}
            disabled={option.disabled}
          >
            {option.text}
          </option>
        )
      }
    )}
  </select>

export default Consumer(Select)