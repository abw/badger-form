import { Form, Field, Layout } from '@/lib/index'

{/* START */}
// PRETEND: import { Form, Field, Layout } from '@abw/badger-form'

const FieldChildrenExample = () =>
  <Form>
    <Field
      name="hello"
      label="Enter a greeting"
    >
      <Layout/>
      { field =>
        <div className="info alert">
          You have entered: {field.value as string}
        </div>
      }
    </Field>
  </Form>

export default FieldChildrenExample