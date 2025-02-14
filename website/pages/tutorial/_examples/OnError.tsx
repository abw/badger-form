import { Form, Field, Submit, FormSubmitError } from '@/lib/index'

{/* START */}
import { useState } from 'react'
// PRETEND: import {
// PRETEND:   Form, Field, Submit,
// PRETEND:   FormSubmitError // TS type
// PRETEND: } from '@abw/badger-form'

const SubmitThrow = () => {
  const [error, setError] = useState<FormSubmitError>()

  const onSubmit = () => Promise.reject({
    errors: [
      {
        name:    'email',
        message: 'Your email address is not valid'
      },
      {
        name:    'password',
        message: 'Your password is too easy to guess'
      }
    ],
  })

  return (
    <>
      <Form onSubmit={onSubmit} onError={setError}>
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
      { error
        ? <div className="info alert mar-t-4 mar-b-none">
            <h4>Submission Error</h4>
            <pre>{JSON.stringify(error, null, 2)}</pre>
          </div>
        : null
      }
    </>
  )
}

export default SubmitThrow