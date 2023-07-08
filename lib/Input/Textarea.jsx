import React from 'react'
import { Consumer } from '../Field/Context.jsx'
import { classes } from '../Utils.js'

const Textarea = ({
  wide,
  inputAttrs,
  inputClass,
}) =>
  <textarea
    {...inputAttrs}
    className={classes(inputClass, { wide })}
  />

export default Consumer(Textarea)