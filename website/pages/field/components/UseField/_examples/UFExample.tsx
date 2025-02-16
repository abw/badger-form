import { Form, Field, Layout, UseField } from '@/lib/index'

{/* START */}
// PRETEND: import { Form, Field, Layout, UseField } from '@abw/badger-form'

const UseFieldExample = () =>
  <Form>
    <Field
      name="hello"
      label="Enter a greeting"
    >
      <Layout/>
      <div className="info alert">
        <UseField>
          { field => `You have entered: ${field.value}`}
        </UseField>
      </div>
    </Field>
  </Form>

export default UseFieldExample