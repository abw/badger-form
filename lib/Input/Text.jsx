import React from 'react'
import Handlers from './Handlers.js'
import { inputClasses, inputAttrs } from '../Utils.js'
import { useField } from '../Field/Context.js'
import { TEXT } from '../Constants.jsx'

export const Text = ({ field=useField() }) => {
  const {
    type=TEXT,
    handler=Handlers[type]||Handlers.default
  } = field
  const attrs = inputAttrs(field)

  return (
    <input
      type={type}
      ref={field.inputRef}
      className={inputClasses(field)}
      aria-disabled={field.disabled}
      // aria-invalid, aria-required
      tabIndex={field.disabled ? -1 : field.tabIndex}
      onFocus={field.onFocus}
      onBlur={field.onBlur}
      onChange={handler(field)}
      {...attrs}
    />
  )
}

export default Text

