import React from 'react'
import { Consumer } from './Context.jsx'

const Layout = ({ message, invalid }) =>
  <div className="help" role={invalid ? 'alert' : 'note'}>
    {message}
  </div>

export default Consumer(Layout)