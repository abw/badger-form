import React from 'react'
import Children from './Children.jsx'
import { Consumer } from './Context.jsx'

const Layout = ({
  onSubmit,
  children,
  className='',
  style
}) =>
  <form onSubmit={onSubmit} className={className} style={style} noValidate>
    <Children>
      {children}
    </Children>
  </form>

export default Consumer(Layout)