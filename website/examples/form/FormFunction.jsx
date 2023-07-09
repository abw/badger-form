import { Form, Field } from '../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/badger-form'

const FormFunction = () =>
  <Form>
    <h2>Form Function</h2>
    <Field name="one"/>
    <Field name="two"/>
    { form => form.formState.isDirty
      ? <p>Form is dirty</p>
      : <p>Form is clean</p>
    }
  </Form>

export default FormFunction