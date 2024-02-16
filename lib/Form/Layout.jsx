import React from 'react'
import { Children, useForm } from './Context.js'
import { formAttrs } from '../Utils.js'

const Layout = ({
  children,
}) => {
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

export default Layout