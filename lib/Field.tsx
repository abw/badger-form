import prepareField from './Field/Prepare.jsx'
import FieldLayout from './Field/Layout.jsx'
import { useForm } from './Form/Context.js'
import { Provider, Children }  from './Field/Context.js'
import { FieldComponentProps } from './types.js'

export const Field = ({
  name,
  children,
  ...props
}: FieldComponentProps) => {
  const form = useForm()
  const { fieldSpec } = form
  const field = prepareField(fieldSpec(name, props))
  const Layout = field.Layout || FieldLayout

  return (
    <Provider form={form} {...field}>
      { children
        ? <Children>
            {children}
          </Children>
        : <Layout/>
      }
    </Provider>
  )
}

export default Field
