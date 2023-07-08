import React from 'react'
import { Consumer } from '../Field/Context.jsx'
import { classes } from '../Utils.js'

const Text = ({
  wide,
  inputAttrs,
  inputClass,
}) =>
  <input
    {...inputAttrs}
    className={classes(inputClass, { wide })}
  />

export default Consumer(Text)