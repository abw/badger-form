import { Form, UseForm, Field } from '../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, UseForm } from '@abw/badger-form'

const FormUseForm = () =>
  <Form>
    <h2>UseForm Component</h2>
    <Field name="one"/>
    <Field name="two"/>
    <p>
      Form is{' '}
      <UseForm>
        { form => form.formState.isDirty
          ? 'dirty'
          : 'clean'
        }
      </UseForm>
    </p>
  </Form>

export default FormUseForm