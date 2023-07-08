import React from 'react'
import Children from './Field/Children.jsx'
import { Provider }  from './Field/Context.jsx'

export const Field = ({
  children,
  ...props
}) =>
  <Provider {...props}>
    <Children>
      {children}
    </Children>
  </Provider>

export default Field

