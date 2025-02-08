import { Form, Field, Submit, Errors } from '@/lib/index'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Errors, Submit } from '@abw/badger-form'

const onFire = () =>
  Promise.reject({
    error: 'Dear Sir/Madam, Fire! Fire! Help me!',
  })

const OnSubmitReject = () =>
  <Form onSubmit={onFire}>
    <Field
      name="message"
      label="Message"
    />
    <Errors/>
    <Submit/>
  </Form>

export default OnSubmitReject