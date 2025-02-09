import React from 'react'
import Handlers from './Handlers.js'
import { useField } from '../Field/Context'
import { inputAttrs, classes, valueOption } from '../Utils'

const Radio = ({
  field=useField()
}) => {
  const {
    inline,
    border,
    options=[],
    inputClass,
    optionClass,
    optionsClass='options',
    type='radio',
    handler=Handlers[type]||Handlers.default
  } = field
  const attrs = inputAttrs(field)

  return (
    <div className={classes(optionsClass)}>
      { options.map(
        (option, i) => {
          option = valueOption(option)
          const id = `${field.id}-${option.value}`
          const checked = field.value == option.value
          // when we focus the field we want to focus the currently selected
          // option (if there is one) or the first option otherwise
          const focus = field.value ? checked : i == 0
          const ref = focus ? field.inputRef : null
          const labelClass = classes(
            'radio',
            optionClass,
            option.className,
            { inline, border }
          )
          return (
            <label
              key={option.value}
              className={labelClass}
              disabled={option.disabled}
              htmlFor={id}
            >
              <input
                type={type}
                className={inputClass}
                // ref={field.inputRef}
                ref={ref}
                aria-disabled={field.disabled}
                tabIndex={field.disabled ? -1 : field.tabIndex}
                onChange={handler(field)}
                {...attrs}
                id={id}
                checked={checked}
                value={option.value}
              />
              {option.text}
            </label>
          )
        }
      )}
    </div>
  )
}

export default Radio
