import { Form, Field } from '@/lib/index'

{/* START */}
// PRETEND: import { Form, Field } from '@abw/badger-form'

const RequiredLabel = () =>
  <Form
    showRequired
    requiredLabel="Important!"
  >
    <Field
      name="field1"
      label="Required Field"
      required
    />
    <Field
      name="field2"
      label="Another Required Field"
      requiredLabel="Very Important!"
      required
    />
  </Form>

export default RequiredLabel