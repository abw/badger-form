import { Form, Field } from '@/lib/index'

{/* START */}
// PRETEND: import { Form, Field } from '@abw/badger-form'

const LabelExample = () =>
  <Form>
    <Field
      name="field1"
      label="Hello World!"
    />
  </Form>

export default LabelExample