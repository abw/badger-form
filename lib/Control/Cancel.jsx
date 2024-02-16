import React from 'react'
import DefaultButton from './Button.jsx'
// import { Themed } from '../Theme.jsx'

const Cancel = ({
  text='Cancel',
  className='cancel',
  Button=DefaultButton,
  ...props
}) =>
  <Button
    text={text}
    className={className}
    {...props}
  />

export default Cancel
// export default Themed(Cancel, 'Form.Cancel')