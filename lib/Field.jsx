import React from 'react'
import prepareField from './Field/Prepare.jsx'
import FieldLayout from './Field/Layout.jsx'
import { useForm } from './Form/Context.js'
import { Provider, Children }  from './Field/Context.js'

export const Field = ({
  name,
  children,
  ...props
}) => {
  const form  = useForm()
  const field = prepareField(form.fieldSpec(name, props))
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
