import React from 'react'
import { useField } from './Context.js'
import { selectClass } from '../Utils.js'
// import { Themed } from '../Theme.jsx'

const Message = ({ field=useField() }) => {
  const { help, message, classes } = field
  const text = message ?? help
  const className = selectClass(classes, 'help')
  return text
    ? <div className={className}>{text}</div>
    : null
}

export default Message
// export default Themed(Message, 'Form.Field.Message')