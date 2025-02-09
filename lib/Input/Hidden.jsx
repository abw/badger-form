import React from 'react'
import { useField } from '../Field/Context'

export const Hidden = ({ field=useField() }) =>
  <input type="hidden" name={field.name} value={field.value}/>

export default Hidden

