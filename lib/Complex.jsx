import React from 'react'
import Fields from './Fields.jsx'
import prepareField from './Field/Prepare.jsx'
import { Provider, Children }  from './Complex/Context.js'
import { useForm } from './Form/Context.js'

export const Complex = ({
  name,
  children,
  fields,
  ...props
}) => {
  const form  = useForm()
  const field = prepareField(form.fieldSpec(name, props))

  return (
    <Provider form={form} field={field} name={name}>
      { Boolean(fields) && <Fields names={fields} {...props}/> }
      { children &&
        <Children>
          {children}
        </Children>
      }
    </Provider>
  )
}

export default Complex
