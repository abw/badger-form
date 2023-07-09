import React from 'react'
import DefaultButton from './Button.jsx'
import { useForm } from '../Form/Context.jsx'

export const Reset = ({
  type='button',
  text='Reset',
  className='reset',
  Button=DefaultButton,
  ...props
}) => {
  const { reset, values } = useForm()

  return (
    <Button
      type={type}
      text={text}
      className={className}
      onClick={() => reset(values)}
      {...props}
    />
  )
}

export default Reset
