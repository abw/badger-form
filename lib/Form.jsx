import React from 'react'
import { Provider }  from './Form/Context.jsx'
import Layout from './Form/Layout.jsx'

export const Form = ({
  children,
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
