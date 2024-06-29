import React from 'react'
import { useField } from './Context.js'
import { classes } from '../Utils.js'

const Suffix = ({
  field=useField()
}) =>
  <div className={classes('suffix', field.suffixClass)}>
    {field.suffix}
  </div>

export default Suffix
