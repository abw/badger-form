import React from 'react'
import Children from './Children.jsx'
import { Consumer } from './Context.jsx'

const Form = ({
  onSubmit,
  children,
  className='',
  style
}) =>
  <form onSubmit={onSubmit} className={className} style={style}>
    <Children>
      {children}
    </Children>
  </form>

export default Consumer(Form)