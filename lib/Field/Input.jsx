import React from 'react'
import InputTypes from '../Input/index.jsx'
// import DefaultPrefix from './Prefix.jsx'
// import DefaultSuffix from './Suffix.jsx'
import { Consumer } from './Context.jsx'
// import { selectClass } from '../Utils.js'
// import { hasValue } from '@abw/badger-utils'
import { RADIO, TEXT } from '../Constants.jsx'
import { joinClasses, setKeys } from '../Utils.js'
import { hasValue } from '@abw/badger-utils'

const Input = ({
  type=TEXT,
  wide,
  inputClass,
  prefix,
  suffix,
}) => {
  const Type = InputTypes[type] || InputTypes.default
  const classes = joinClasses([
    'input',
    inputClass,
    ...setKeys({ wide })
  ])
  if (type == RADIO) {
    return <Type/>
  }
  return (
    <div className={classes}>
      { hasValue(prefix) && <div className="prefix">{prefix}</div> }
      <Type/>
      { hasValue(suffix) && <div className="suffix">{suffix}</div> }
    </div>
  )
}

export default Consumer(Input)

/*
    // <div className="input">
     { hasValue(prefix) && <Prefix field={field}/> }
     { hasValue(suffix) && <Suffix field={field}/> }
    // </div>
*/