import React from 'react'
import { useField } from './Context.js'
import { REQUIRED, OPTIONAL } from '../Constants.jsx'

const Label = ({ field=useField() }) => {
  const { label, id, required, optional } = field
  const showRequired = field.showRequired  && required
  const showOptional = field.showOptional  && (optional || ! required)
  const hasLabel     = label || showRequired || showOptional
  const className    = field.labelClass
  const style        = { }
  if (showRequired && field.requiredLabel !== REQUIRED) {
    style['--required-text'] = `"${field.requiredLabel}"`
  }
  if (showOptional && field.optionalLabel !== OPTIONAL) {
    style['--optional-text'] = `"${field.optionalLabel}"`
  }

  return hasLabel &&
    <label htmlFor={id} className={className} style={style}>
      {label||<span>&nbsp;</span>}
    </label>
}

export default Label
