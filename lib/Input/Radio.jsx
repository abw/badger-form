import React from 'react'
import { Consumer } from '../Field/Context.jsx'
import { classes, valueOption } from '../Utils.js'

const Radio = ({
  // id,
  wide,
  border,
  options,
  inputAttrs,
  inputClass,
  optionClass,
  // required,
}) =>
  <div className={classes(inputClass)}>
    { options.map(
      option => {
        option = valueOption(option)
        return (
          <label
            key={option.value}
            className={classes('radio', optionClass, option.className, { wide, border })}
            disabled={option.disabled}
          >
            <input
              type="radio"
              className={inputClass}
              {...inputAttrs}
            />
            {option.text}
          </label>
        )
      }
    )}
  </div>

export default Consumer(Radio)