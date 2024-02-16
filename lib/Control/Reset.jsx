import React from 'react'
import DefaultButton from './Button.jsx'
import { useForm } from '../Form/Context.js'
// import { Themed } from '../Theme.jsx'

const Reset = ({
  type='reset',
  text='Reset',
  className='reset',
  Button=DefaultButton,
  ...props
}) => {
  const { reset } = useForm()
  return (
    <Button
      type={type}
      text={text}
      className={className}
      onClick={reset}
      {...props}
    />
  )
}

export default Reset
// export default Themed(Reset, 'Form.Reset')