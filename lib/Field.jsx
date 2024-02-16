import React from 'react'
import prepareField from './Field/Prepare.jsx'
import FieldLayout from './Field/Layout.jsx'
import { useForm } from './Form/Context.js'
import { Provider, Children }  from './Field/Context.js'
// import { Themed } from './Theme.jsx'

export const Field = ({
  name,
  children,
  Layout=FieldLayout,
  ...props
}) => {
  const form  = useForm()
  const field = prepareField(form.fieldSpec(name, props))

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
