import { useId } from 'react'
import { useForm } from './Form/Context.jsx'
import { inputAttrs } from '../Utils.js'
import errorMessage from './errorMessage.js'
import { Generator } from '@abw/react-context'

const Context = ({
  name,
  render,
  ...props
}) => {
  const { register, fields, formState: { errors } } = useForm()
  const field = {
    ...(fields[name] || { }),
    ...props
  }
  const { id=useId(), label, help } = field
  const regs    = register(name, field)
  const attrs   = inputAttrs(field)
  const error   = errors[name]
  const errmsg  = errorMessage(error, field)
  const message = errmsg ?? help

  console.log(`message: ${message}`)
  console.log(`field:`, field)
  console.log(`regs: `, regs)
  console.log(`attrs: `, attrs)

  return render({
    id, label, message,
    inputAttrs: { ...regs, ...attrs },
    fieldClass: `field ${Boolean(error) && 'invalid'}`,
  })
}

const generated = Generator(Context)
export const { Provider, Consumer, Use: useField } = generated
export default generated