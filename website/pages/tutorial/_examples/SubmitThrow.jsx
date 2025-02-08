import { Form, Field, Submit, Errors } from '@/lib/index'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Errors, Submit } from '@abw/badger-form'

const SubmitThrow = () => {
  const onSubmit = () => {
    throw('Oh noes! An error occurred')
  }

  return (
    <>
      <Form onSubmit={onSubmit}>
        <Errors/>
        <Field
          name="email"
          label="Email Address"
          required
        />
        <Field
          name="password"
          type="password"
          label="Password"
          required
        />
        <Submit text="Login"/>
      </Form>
    </>
  )
}

export default SubmitThrow