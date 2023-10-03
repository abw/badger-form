import { useForm as useReactHookForm } from 'react-hook-form'
import { Generator } from '@abw/react-context'
// import { useState } from 'react'
import { submitHandler } from './Submit.jsx'

const noSubmit = submit => window.alert(
  "You haven't defined an onSubmit handler: " + JSON.stringify(submit)
)
// const noError = errors => window.alert(
//  "You haven't defined an onError handler: " + JSON.stringify(errors)
// )

const FormContext = ({
  fields,
  values,
  validResponse,
  formatError,
  errorFieldName,
  onSubmit=noSubmit,
  onError,
  onSuccess,
  render,
  ...props
}) => {
  const methods = useReactHookForm({ defaultValues: values })
  const { handleSubmit, setError, clearErrors } = methods

  const submit = submitHandler(
    onSubmit,
    {
      setError,
      clearErrors,
      validResponse,
      onSuccess,
      onError,
      formatError,
      errorFieldName
    }
  )

  // not sure if we need this or we just use root.server error
  // const { formError, setFormError } = useState(undefined)
  // const clearFormError = setFormError(undefined)
  // setError, clearErrors,
  // console.log(`methods: `, methods)

  // onSubmit

  return render({
    fields,
    values,
    // formError,
    // setFormError,
    ...methods,
    ...props,
    // onSubmit: handleSubmit(onSubmit)
    onSubmit: handleSubmit(submit)
    // onSubmit: handleSubmit(onSubmit, onError) - nah, I think onError triggers on validation errors
  })
}

const generated = Generator(FormContext)
export const { Context, Provider, Consumer, Use: useForm } = generated
export default generated