import { Form, Field, ResetSubmit, Debug } from '@/lib/index'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, ResetSubmit, Debug } from '@abw/badger-form'
import { sleep } from '@abw/badger-utils'

// some dummy handlers to simulate form submission
const formProps = {
  // wait 1s after submission to respond
  onSubmit: values => sleep(1000)
    .then( () => ({ ok: true, values }) ),
  // wait 1s after response then reset form
  onSuccess: (response, form) => sleep(1000)
    .then( () => form.reset() ),
  // don't automatically reset form on success
  resetOnSuccess: false
}

const DebugForm = () =>
  <Form
    debug
    {...formProps}
  >
    <Field
      name="message"
      label="Message"
      required
    />
    <ResetSubmit space/>
    <Debug status/>
  </Form>

export default DebugForm