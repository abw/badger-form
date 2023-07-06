import React from 'react'
import { Consumer } from './Context.jsx'

const Form = ({onSubmit, children}) =>
  <form onSubmit={onSubmit}>
    {children}
  </form>

export default Consumer(Form)