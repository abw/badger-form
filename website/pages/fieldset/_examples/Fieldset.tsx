import { Form, Field, Fieldset } from '@/lib/index'

{/* START */}
// PRETEND: import { Form, Field, Fieldset } from '@abw/badger-form'

const FieldsetExample = () =>
  <Form>
    <Fieldset>
      <Field name="one" label="Field One"/>
      <Field name="one" label="Field Two"/>
    </Fieldset>
  </Form>

export default FieldsetExample
