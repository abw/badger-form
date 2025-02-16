import { Form, Field } from '@/lib/index'

const Border = () =>
  /* START */
  <Form>
    <Field
      name="one"
      type="checkbox"
      text="Checkbox with a border"
      border
    />
    <Field
      name="two"
      type="checkbox"
      text="Inline checkbox with border"
      border
      inline
    />
  </Form>
  /* END */

export default Border