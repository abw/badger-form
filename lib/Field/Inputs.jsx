import React from 'react'
import InputTypes from '../Input/index.js'
import DefaultPrefix from './Prefix.jsx'
import DefaultSuffix from './Suffix.jsx'
import { useField } from './Context.js'
import { selectClass } from '../Utils.js'
import { hasValue } from '@abw/badger-utils'
import { TEXT } from '../Constants.jsx'
// import { Themed } from '../Theme.jsx'

const Inputs = ({ field=useField() }) => {
  const {
    classes, prefix, suffix, inputsClass, inline,
    type=TEXT,
    Prefix=DefaultPrefix,
    Suffix=DefaultSuffix,
  } = field
  const Type = InputTypes[type] || InputTypes.default
  let classNames = [
    selectClass(classes, 'inputs'),
    // selectClass(classes, type)
  ]
  if (hasValue(prefix)) {
    classNames.push(selectClass(classes, 'prefixed'))
  }
  if (hasValue(suffix)) {
    classNames.push(selectClass(classes, 'suffixed'))
  }
  if (inline) {
    classNames.push(selectClass(classes, 'inline'))
  }
  if (hasValue(inputsClass)) {
    classNames.push(inputsClass)
  }
  const className = classNames.join(' ')

  return (
    <div className={className}>
      { hasValue(prefix) && <Prefix field={field}/> }
      <Type field={field}/>
      { hasValue(suffix) && <Suffix field={field}/> }
    </div>
  )
}

export default Inputs
// export default Themed(Inputs, 'Form.Field.Inputs')
