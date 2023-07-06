import React, { useId } from 'react'
import { useForm } from './Form/Context.jsx'
import { inputAttrs } from './Utils.js'
import errorMessage from './Field/errorMessage.js'

const Field = ({name, ...props}) => {
  const { register, fields, formState: { errors } } = useForm()
  const field = {
    ...(fields[name] || { }),
    ...props
  }
  const { id=useId(), label, help } = field
  const regs = register(name, field)
  const attrs = inputAttrs(field)

  console.log(`field:`, field)
  console.log(`regs: `, regs)
  console.log(`attrs: `, attrs)

  const error   = errors[name]
  const errmsg  = errorMessage(error, field)
  const message = errmsg ?? help
  console.log(`message: ${message}`)


  console.log(`error:`, error)

  return (
    <div className={`field ${Boolean(error) && 'invalid'}`}>
      { label &&
        <label htmlFor={id}>{label}</label>
      }
      <input {...regs} {...attrs}/>
      { Boolean(message)
        && <div className="help">{message}</div>
      }
    </div>
  )
}

export default Field