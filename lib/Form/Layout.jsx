import React from 'react'
import Children from './Children.jsx'
import { useForm } from './Context.js'
import { formAttrs } from '../Utils.js'

const Layout = ({
  children,
}) => {
  const form = useForm()
  const {
    submit,
    className
  } = form
  const attrs = formAttrs(form)

  return (
    <form className={className} {...attrs} onSubmit={submit} noValidate>
      <Children>
        {children}
      </Children>
    </form>
  )
}

export default Layout