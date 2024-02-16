import React from 'react'
import { useField } from './Context.js'
import { classes } from '../Utils.js'
// import { Themed } from '../Theme.jsx'

const Suffix = ({
  field=useField()
}) =>
  <div className={classes('suffix', field.suffixClass)}>
    {field.suffix}
  </div>

export default Suffix
// export default Themed(Suffix, 'Form.Input.Suffix')
