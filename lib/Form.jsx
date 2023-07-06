import React         from 'react'
// import DefaultLayout from './Form/Layout.jsx'
import { Provider }  from './Form/Context.jsx'
import Layout from './Form/Layout.jsx'

const Form = ({
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
