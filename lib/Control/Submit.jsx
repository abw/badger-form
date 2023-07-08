import React from 'react'
import DefaultButton from './Button.jsx'

export const Submit = ({
  type='submit',
  text='Submit',
  className='submit',
  onClick,
  Button=DefaultButton,
  ...props
}) =>
  <Button
    type={type}
    text={text}
    className={className}
    onClick={onClick}
    {...props}
  />

export default Submit