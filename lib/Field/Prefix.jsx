import React from 'react'
import { useField } from './Context'
import { classes } from '../Utils'

const Prefix = ({
  field=useField()
}) =>
  <div className={classes('prefix', field.prefixClass)}>
    {field.prefix}
  </div>

export default Prefix
