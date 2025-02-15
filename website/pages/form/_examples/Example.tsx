import { Form, Field, Submit } from '@/lib/index'

{/* START */}
// PRETEND: import { Form, Field, Submit } from '@abw/badger-form'

const FormExample = () =>
  <Form>
    <Field
      name="email"
      label="Email Address"
      type="text"
      required
    />
    <Field
      name="password"
      label="Password"
      type="password"
      required
    />
    <Submit/>
  </Form>

export default FormExample