import React from 'react'
import { useField } from './Context'
import { classes } from '../Utils'

const Suffix = ({
  field=useField()
}) =>
  <div className={classes('suffix', field.suffixClass)}>
    {field.suffix}
  </div>

export default Suffix
