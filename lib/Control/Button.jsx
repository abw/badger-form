import React from 'react'

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

