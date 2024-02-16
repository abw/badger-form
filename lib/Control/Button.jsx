import React from 'react'
// import { Themed } from '../Theme.jsx'

const Button = ({
  onClick,
  children,
  text='Button',
  type='button',
  ...props
}) =>
  <button
    type={type}
    onClick={onClick}
    {...props}
  >
    {children||text}
  </button>

export default Button
// export default Themed(Button, 'Form.Button')

