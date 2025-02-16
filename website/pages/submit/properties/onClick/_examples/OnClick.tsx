import { Form, Field, Submit } from '@/lib/index'

const OnClick = () =>
  /* START */
  <Form>
    <Field name="field1" label="Field One"/>
    <Submit
      onClick={
        e => {
          e.preventDefault()
          alert('Submit button was clicked!')
        }
      }
    />
  </Form>
  /* END */

export default OnClick