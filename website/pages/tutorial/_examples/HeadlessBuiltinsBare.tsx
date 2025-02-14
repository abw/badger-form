import {
  Form, Field, Layout, Label, Text, Message, Submit
} from '@/lib/index'

{/* START */}
// PRETEND: import {
// PRETEND:   Form, Field, Layout, Label, Text, Message, Submit
// PRETEND: } from '@abw/badger-form'

const fields = {
  email: {
    label:    'Email Address',
    required: true,
  },
}

const HeadlessBuiltins = () =>
  <Form fields={fields}>
    <Field name="email">
      <Layout>
        <h2 className="mar-t-none">
          Custom Layout for Email field
        </h2>
        <Label/>
        <Text/>
        <Message/>
      </Layout>
    </Field>
    <Submit text="Login"/>
  </Form>

export default HeadlessBuiltins