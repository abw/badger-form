import { Form, Field, Submit } from '@/lib/index'

{/* START */}
// PRETEND: import { Form, Field, Submit } from '@abw/badger-form'

const BasicLoginForm = () =>
  <Form>
    <h2>Login Form</h2>
    <Field
      required
      name="email"
      label="Email Address"
    />
    <Field
      required
      name="password"
      type="password"
      label="Password"
    />
    <Submit
      text="Login"
    />
  </Form>

export default BasicLoginForm