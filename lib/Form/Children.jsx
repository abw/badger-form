import React from 'react'
import { Children } from './Context.jsx'

export const FormChildren = ({ children }) =>
  <Children>
    {children}
  </Children>

export default FormChildren
