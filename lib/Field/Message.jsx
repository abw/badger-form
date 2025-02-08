import React from 'react'
import { useField } from './Context'
import { selectClass } from '../Utils'

const Message = ({ field=useField() }) => {
  const { help, message, classes } = field
  const text = message ?? help
  const className = selectClass(classes, 'help')
  return text
    ? <div className={className}>{text}</div>
    : null
}

export default Message
