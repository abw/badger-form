import { Form, Field, Submit, FormSubmitHandler, FieldValues } from '@/lib/index'

{/* START */}
import { useState } from 'react'
// PRETEND: import {
// PRETEND:   Form, Field, Submit,
// PRETEND:   FormSubmitHandler, FieldValues    // Types for TS
// PRETEND: } from '@abw/badger-form'

const DummySubmit = () => {
  const [values, setValues] = useState<FieldValues>()
  const onSubmit: FormSubmitHandler = values => {
    setValues(values)
    return Promise.resolve({ ok: true })
  }

  return (
    <>
      <Form onSubmit={onSubmit}>
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
      { values
        ? <div className="info alert border mar-t-4">
            <h4>Submitted Values</h4>
            <pre>{JSON.stringify(values)}</pre>
          </div>
        : null
      }
    </>
  )
}

export default DummySubmit