import React from 'react'
import Label from './Label.jsx'
import Input from './Input.jsx'
import Message from './Message.jsx'
import { Consumer } from './Context.jsx'
import { classes } from '../Utils.js'

const Layout = ({
  label,
  message,
  invalid,
  fieldClass
}) =>
  <div className={classes('field', fieldClass, { invalid })}>
    { Boolean(label) && <Label/> }
    <Input/>
    { Boolean(message) && <Message/> }
  </div>

export default Consumer(Layout)