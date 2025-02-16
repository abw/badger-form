import { Form, Field, Reset } from '@/lib/index'

const OnClickExample = () =>
  /* START */
  <Form>
    <Field name="field1" label="Field One"/>
    <Reset onClick={() => alert('reset intercepted')}/>
  </Form>
  /* END */

export default OnClickExample