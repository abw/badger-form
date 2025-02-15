import { Form, Field, Submit } from '@/lib/index'

{/* START */}
// PRETEND: import { Form, Field, Submit } from '@abw/badger-form'

const HelpExample = () =>
  <Form>
    <Field
      name="email"
      label="Email Address"
      help="Enter the email address that you registered with"
      required
    />
    <Submit/>
  </Form>

export default HelpExample