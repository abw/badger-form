import React from 'react'
import DefaultLabel from './Label'
import DefaultInput from './Input.jsx'
import DefaultMessage from './Message'
import Hidden from '../Input/Hidden.jsx'
import { useField } from './Context'
import { fieldClass } from '../Utils'

const Layout = ({
  field=useField(),
  children
}) => {
  const {
    type,
    Label=DefaultLabel,
    Message=DefaultMessage,
    Input=DefaultInput,
  } = field
  const classes = fieldClass(field)

  // special case for hidden fields which don't need any wrappers
  if (type === 'hidden') {
    return <Hidden field={field}/>
  }

  return (
    <div className={classes}>
      { children ||
        <>
          <Label field={field}/>
          <Input field={field}/>
          <Message field={field}/>
        </>
      }
    </div>
  )
}

export default Layout
