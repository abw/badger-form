import React from 'react'
import DefaultButton from './Button.jsx'
import { useForm } from '../Form/Context.js'

const Submit = ({
  type='submit',
  text='Submit',
  className='submit',
  Button=DefaultButton,
  ...props
}) => {
  const { submit, status } = useForm()
  return (
    <Button
      type={type}
      text={text}
      className={className}
      onClick={submit}
      disabled={status.submitting}
      {...props}
    />
  )
}

export default Submit
