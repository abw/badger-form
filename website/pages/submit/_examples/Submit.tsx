import { Form, Field, Submit } from '@/lib/index'

{/* START */}
// PRETEND: import { Form, Field, Submit } from '@abw/badger-form'

const onSubmit = () => {
  alert('Form was submitted')
  return { ok: true }
}

const SubmitExample = () =>
  <Form onSubmit={onSubmit}>
    <Field name="one" label="Field one"/>
    <Field name="two" label="Field two"/>
    <Submit/>
  </Form>

export default SubmitExample