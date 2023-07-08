import React from 'react'
import { Consumer } from '../Field/Context.jsx'
import { classes } from '../Utils.js'

const Checkbox = ({
  text,
  wide,
  border,
  inputAttrs,
  className
}) =>
  <label
    className={classes('checkbox', className, { wide, border })}
  >
    <input
      type="checkbox"
      {...inputAttrs}
    />
    {text}
  </label>

export default Consumer(Checkbox)