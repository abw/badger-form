import { Form, Field, Submit } from '@/lib/index'

{/* START */}
import React, { useState } from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/badger-form'

const SubmitResponse = () => {
  const [response, setResponse] = useState()

  // handle successful response
  const onSuccess = response =>
    setResponse(response.data)

  // dummy submission in the style of fetch or axios
  const onSubmit = values =>
    Promise.resolve({
      status: 200,
      data:   {
        message: 'Welcome back!',
        user:    {
          id:    12345,
          email: values.email,
          name:  'Bobby Badger',
        },
      }
    })

  return (
    <>
      <Form
        onSubmit={onSubmit}
        onSuccess={onSuccess}
      >
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
      { response
        ? <div className="info alert mar-t-4">
            <h4>Emulated Response</h4>
            <pre>{JSON.stringify(response, null, 2)}</pre>
          </div>
        : null
      }
    </>
  )
}

export default SubmitResponse