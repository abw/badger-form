import { Form, Fields, Submit } from '../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Fields, Submit } from '@abw/badger-form'

const fields = {
  forename: {
    label: 'First Name',
    required: true,
  },
  surname: {
    label: 'Surname',
    required: true,
  },
  company: {
    label: 'Company',
    required: true,
  },
  job_title: {
    label: 'Job Title',
    required: true,
  },
}

const FormWithFields = () =>
  <Form fields={fields}>
    <h2>Fields in a Grid With Custom Gap</h2>
    <Fields
      names="forename surname company job_title"
      grid={2} gap={12} wide
    />
    <Submit/>
  </Form>

export default FormWithFields
