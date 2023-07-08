import { useEffect, useId } from 'react'
import { useForm } from '../Form/Context.jsx'
import { inputAttrs } from '../Utils.js'
import { Generator } from '@abw/react-context'
import errorMessage from './errorMessage.js'

const FieldContext = ({
  name,
  render,
  className,
  fieldClass,
  prepareValue,
  watchField,
  ...props
}) => {
  const { register, setValue, watch, fields={}, formState: { errors } } = useForm()
  const field = {
    ...(fields[name] || { }),
    ...props
  }
  const { id=useId(), help } = field
  const regs    = register(name, field)
  const error   = errors[name]
  const errmsg  = errorMessage(error, field)
  const message = errmsg ?? help
  const invalid = Boolean(error)
  let setter    = null

  if (prepareValue) {
    setter = value => setValue(name, prepareValue(value))
    regs.onChange = e => setter(e.target.value)
  }
  if (watchField) {
    const watchValue = watch(watchField, '')
    // console.log(`watched value: ${watchField} => ${watchValue}`)
    setter ||= value => setValue(name, value)
    useEffect(
      () => setter(watchValue),
      [watchValue]
    )
  }

  // console.log(`message: ${message}`)
  // console.log(`field:`, field)
  // console.log(`error:`, error)
  // console.log(`regs: `, regs)
  // console.log(`attrs: `, attrs)

  return render({
    name, id, message, invalid,
    fieldClass,
    inputAttrs: {
      id, className,
      'aria-invalid': invalid,
      ...regs,
      ...inputAttrs(field)
    },
    ...field,
  })
}

const generated = Generator(FieldContext)
export const { Context, Provider, Consumer, Use: useField } = generated
export default generated