import React from 'react'
import FormLayout from './Form/Layout.jsx'
import { Provider }  from './Form/Context.js'

export const Form = ({
  children,
  Layout=FormLayout,
  ...props
}) => {
  return (
    <Provider {...props}>
      <Layout>
        {children}
      </Layout>
    </Provider>
  )
}

export default Form
