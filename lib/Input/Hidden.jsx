import React from 'react'
import { useField } from '../Field/Context.js'
// import { Themed } from '../Theme.jsx'

export const Hidden = ({ field=useField() }) =>
  <input type="hidden" name={field.name} value={field.value}/>

export default Hidden
// export default Themed(Hidden, 'Form.Input.Hidden')

