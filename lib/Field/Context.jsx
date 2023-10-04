import { useState, useEffect, useId } from 'react'
import { useForm } from '../Form/Context.jsx'
import { inputAttrs } from '../Utils.js'
import { Generator } from '@abw/react-context'
import errorMessage from './errorMessage.js'
import { CLEAN } from '../Constants.jsx'
import { fieldValidator } from './Validation.jsx'
import { useCallback } from 'react'
// import validateValue from './Validation.jsx'

const FieldContext = ({
  name,
  render,
  className,
  fieldClass,
  prepareValue,
  // validateOnChange,
  watchField,
  ...props
}) => {
  const {
    register, setValue, setError, clearErrors, watch, fields={},
    formState: { errors }
  } = useForm()
  const [status, setStatus] = useState(CLEAN)
  const field = {
    ...(fields[name] || { }),
    ...props
  }
  const { id=useId(), help, validate } = field
  if (validate) {
    const validator = useCallback(
      fieldValidator(
        name, validate,
        { setValue, setError, clearErrors, setStatus }
      ),
      [validate]
    )
    field.validate = validator
  }
  const error   = errors[name]
  const errmsg  = error && errorMessage(error, field)
  const message = errmsg ?? help
  const invalid = Boolean(error)
  const regs    = register(name, field)
  let setter    = value => setValue(name, value)


  /*
  const vfn = validate
    ? fieldValidator(
      name, validate,
      { setValue, setError, clearErrors, setStatus }
    )
    : null
  if (validateOnChange) {
    setter = value => validateValue(
      name, value, validateOnChange,
      { setValue, setError, clearErrors }
    )
    regs.onChange = e => setter(e.target.value)
  }
  */
  if (prepareValue) {
    const oldSetter = setter
    setter = value => oldSetter(prepareValue(value))
    regs.onChange = e => setter(e.target.value)
  }
  if (watchField) {
    const watchValue = watch(watchField, '')
    // console.log(`watched value: ${watchField} => ${watchValue}`)
    // setter ||= value => setValue(name, value)
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
    name, id, message, invalid, status,
    fieldClass,
    inputAttrs: {
      id, className,
      'aria-invalid': invalid,
      ...regs,
      ...inputAttrs(field)
    },
    setValue: setter,
    value: watch(name),
    ...field,
  })
}

const generated = Generator(FieldContext)
export const { Context, Provider, Consumer, Use: useField } = generated
export default generated