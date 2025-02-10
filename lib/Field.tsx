import usePrepareField from './Field/Prepare'
import FieldLayout from './Field/Layout'
import { useForm } from './Form/Context'
import { Provider, Children }  from './Field/Context'
import { FieldComponentProps } from './types'

export const Field = ({
  name,
  children,
  ...props
}: FieldComponentProps) => {
  const form = useForm()
  const { fieldSpec } = form
  const field = usePrepareField(fieldSpec(name, props))
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
