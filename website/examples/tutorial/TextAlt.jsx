import { Form, Field } from '../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/badger-form'

const TextInputs = () =>
  <Form>
    <Field
      type="password"
      name="password" label="Password"
    />
    <Field
      type="number" min="1" max="11"
      name="number" label="Number"
    />
    <Field
      type="date"
      name="date" label="Date"
    />
    <Field
      type="month"
      name="month" label="Month"
    />
    <Field
      type="week"
      name="week" label="Week"
    />
    <Field
      type="time"
      name="time" label="Time"
    />
    <Field
      type="email"
      name="email" label="Email"
    />
    <Field
      type="tel"
      name="tel" label="Telephone"
    />
    <Field
      type="url"
      name="url" label="URL"
    />
    <Field
      type="search"
      name="search" label="Search"
    />
  </Form>

export default TextInputs