import { Form, Field } from '@/lib/index'

{/* START */}
// PRETEND: import { Form, Field } from '@abw/badger-form'

const SuffixExample = () =>
  <Form>
    <Field
      name="suffix"
      type="password"
      label="Enter your password"
      suffix="🔒"
    />
  </Form>

export default SuffixExample