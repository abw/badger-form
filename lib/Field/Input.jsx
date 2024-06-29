import React from 'react'
import Inputs from './Inputs.jsx'
import { getInputType } from '../Input/index.js'
import { useField } from './Context.js'
import { hasValue } from '@abw/badger-utils'
import { RADIO, TEXT } from '../Constants.jsx'

const Input = ({
  field=useField()
}) => {
  const {
    prefix,
    suffix,
    type=TEXT,
  } = field
  const Type = getInputType(type)

  if (type == RADIO) {
    return <Type field={field}/>
  }
  if (hasValue(prefix) || hasValue(suffix)) {
    return <Inputs/>
  }
  return (
    <Type field={field}/>
  )
}

export default Input
