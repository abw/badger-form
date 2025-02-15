import { Form, Field } from '@/lib/index'

{/* START */}
// PRETEND: import { Form, Field } from '@abw/badger-form'

const FieldExample = () =>
  <Form>
    <Field
      name="example"
      label="An Example Field"
      type="text"   // default
      required
    />
  </Form>

export default FieldExample