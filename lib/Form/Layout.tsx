import { Children, useForm } from './Context'
import { formAttrs } from '../Utils'
import { FormLayoutProps } from './types'

export const FormLayout = ({
  children,
}: FormLayoutProps) => {
  const form = useForm()
  const attrs = formAttrs(form)
  const { submit, className } = form
  return (
    <form className={className} {...attrs} onSubmit={submit} noValidate>
      <Children>
        {children}
      </Children>
    </form>
  )
}

export default FormLayout