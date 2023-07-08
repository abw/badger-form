import React from 'react'
import { Consumer } from './Context.jsx'

const Label = ({ id, label }) =>
  <label htmlFor={id}>
    {label}
  </label>

export default Consumer(Label)
