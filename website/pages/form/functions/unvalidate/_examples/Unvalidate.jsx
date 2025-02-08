import { Form, Field, Debug } from '@/lib/index'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit, Debug } from '@abw/badger-form'

const UnvalidateExample = () =>
  <Form>
    <Field name="name" label="Name" required/>
    <Field name="email" label="Email Address" required/>
    { form =>
      <div className="flex space small">
        <button type="button" onClick={() => form.validate()}>
          Validate
        </button>
        <button type="button" onClick={() => form.unvalidate()}>
          Unvalidate
        </button>
      </div>
    }
    <Debug status/>
  </Form>

export default UnvalidateExample