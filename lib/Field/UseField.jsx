import React from 'react'
import { Children } from './Context.js'

export const UseField = ({ children }) =>
  <Children>
    {children}
  </Children>

export default UseField