import React from 'react'

export const Button = ({
  onClick,
  children,
  type='button',
  text,
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
