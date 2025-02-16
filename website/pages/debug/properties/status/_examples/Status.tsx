import { Form, Field, ResetSubmit, Debug, FieldValues, FormSubmitResponse, FormObject } from '@/lib/index'

{/* START */}
// PRETEND: import {
// PRETEND:   Form, Field, ResetSubmit, Debug,
// PRETEND:   FieldValues, FormSubmitResponse, FormObject //TS types
// PRETEND: } from '@abw/badger-form'
import { sleep } from '@abw/badger-utils'

// some dummy handlers to simulate form submission
const formProps = {
  // wait 1s after submission to respond
  onSubmit: (values: FieldValues) => sleep(1000)
    .then( () => ({ ok: true, values }) ),
  // wait 1s after response then reset form
  onSuccess: (_response: FormSubmitResponse, form: FormObject) => sleep(1000)
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