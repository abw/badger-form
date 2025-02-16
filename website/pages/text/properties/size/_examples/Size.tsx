import { Form, Field } from '@/lib/index'

const Inline = () =>
  /* START */
  <Form>
    <Field
      name="one"
      label="An inline text field"
      inline
    />
    <Field
      name="two"
      label="With explicit size=25"
      size="25"
      inline
    />
    <Field
      name="two"
      label="Same size with prefix and suffix"
      prefix="£" suffix=".00"
      size="25"
      inline
    />
  </Form>
  /* END */

export default Inline