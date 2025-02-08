import React from 'react'
import { Children } from './Context'

export const UseForm = ({ children }) =>
  <Children>
    {children}
  </Children>

export default UseForm