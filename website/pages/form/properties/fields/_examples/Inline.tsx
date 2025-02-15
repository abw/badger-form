import { Form, Field, Submit } from '@/lib/index'

{/* START */}
// PRETEND: import { Form, Field, Submit } from '@abw/badger-form'

const FieldsExample = () =>
  <Form>
    <Field name="name" label="Your name" required/>
    <Field name="email" label="Your email address" required/>
    <Submit/>
  </Form>

export default FieldsExample