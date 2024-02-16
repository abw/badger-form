import React from 'react'
import { useField } from './Context.js'
import { classes } from '../Utils.js'
// import { Themed } from '../Theme.jsx'

const Prefix = ({
  field=useField()
}) =>
  <div className={classes('prefix', field.prefixClass)}>
    {field.prefix}
  </div>

export default Prefix
// export default Themed(Prefix, 'Form.Input.Prefix')
