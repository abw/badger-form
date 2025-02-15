import { Form, Field } from '@/lib/index'

{/* START */}
// PRETEND: import { Form, Field } from '@abw/badger-form'

const fields = {
  field1: {
    label: 'This is field one',
  },
  field2: {
    label: 'This is field two',
  }
}

const FormFieldsExample = () =>
  <Form fields={fields}>
    <Field
      name="field1"
    />
    <Field
      name="field2"
      label="A different label"
    />
  </Form>

export default FormFieldsExample