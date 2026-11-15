import React from 'react'
import { inputClasses, inputAttrs } from '../Utils.js'
import { useField } from '../Field/Context.js'
import { INPUT, NO_HOVER } from '../Constants.jsx'

export const Static = () => {
  const field = useField()
  const {
    value,
    disabled
  } = field
  const attrs = inputAttrs(field)

  return (
    <div
      className={inputClasses(field, INPUT, NO_HOVER, { disabled })}
      {...attrs}
    >
      {String(value)}
    </div>
  )
}

export default Static

