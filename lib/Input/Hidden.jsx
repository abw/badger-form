import React from 'react'
import { useField } from '../Field/Context.js'

export const Hidden = ({ field=useField() }) =>
  <input type="hidden" name={field.name} value={field.value}/>

export default Hidden

