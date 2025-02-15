import { Form, Field } from '@/lib/index'

const ClassNameExample = () =>
  /* START */
  <Form>
    <Field
      name="field1"
      label="Hello World!"
      className="width-12rem"
    />
    <Field
      name="field2"
      label="Hello World!"
      prefix="£"
      suffix=".00"
      className="width-12rem"
    />
  </Form>
  /* END */

export default ClassNameExample