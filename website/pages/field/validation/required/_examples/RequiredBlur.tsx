import { Form, Field, Submit } from '@/lib/index'

{/* START */}
// PRETEND: import { Form, Field, Submit } from '@abw/badger-form'

const RequiredBlur = () =>
  <Form validateOnBlur>
    <Field
      name="username"
      label="Username"
      required
    />
    <Field
      name="password"
      label="Password"
      required
    />
    <Submit/>
  </Form>

export default RequiredBlur