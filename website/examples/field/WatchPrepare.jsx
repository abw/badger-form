import { Form, Field, Submit } from '../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/badger-form'

const WatchPrepare = () =>
  <Form>
    <Field
      name="name" label="Your name"
      wide
    />
    <Field
      name="copycat"
      label="Your name is..."
      watchField="name"
      wide
    />
    <Field
      name="uri"
      label="Your name in lower-case-uri form is..."
      prepareValue={v => v.toLowerCase().replaceAll(/\W+/g, '-')}
      watchField="name"
      wide
    />
    <Field
      name="upper"
      label="Your name in UPPER CASE is..."
      prepareValue={v => v.toUpperCase()}
      watchField="name"
      wide
    />
    <Submit/>
  </Form>

export default WatchPrepare