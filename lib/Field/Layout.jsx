import React from 'react'
import Label from './Label.jsx'
import DefaultInput from './Input.jsx'
import Message from './Message.jsx'
import { Consumer } from './Context.jsx'
import { classes } from '../Utils.js'

const Layout = ({
  label,
  message,
  invalid,
  fieldClass,
  Input=DefaultInput
}) =>
  <div className={classes('field', fieldClass, { invalid })}>
    { Boolean(label) && <Label/> }
    <Input/>
    { Boolean(message) && <Message/> }
  </div>

export default Consumer(Layout)