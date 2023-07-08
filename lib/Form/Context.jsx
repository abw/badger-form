import { useForm as useReactHookForm } from 'react-hook-form'
import { Generator } from '@abw/react-context'

const noSubmit = submit => window.alert(
  "You haven't defined an onSubmit handler: " + JSON.stringify(submit)
)

const FormContext = ({
  fields,
  values,
  onSubmit=noSubmit,
  render,
  ...props
}) => {
  const methods = useReactHookForm({ defaultValues: values })
  const { handleSubmit } = methods
  // console.log(`methods: `, methods)

  return render({
    fields,
    values,
    ...methods,
    ...props,
    onSubmit: handleSubmit(onSubmit)
  })
}

const generated = Generator(FormContext)
export const { Context, Provider, Consumer, Use: useForm } = generated
export default generated