import { Form, Field, ResetSubmit } from '@/lib/index'

const ResetSubmitExample = () =>
  /* START */
  <Form>
    <Field name="name"  label="Name"/>
    <Field name="email" label="Email"/>
    <ResetSubmit
      submit={{
        className: 'blue',
        text: 'Save'
      }}
    />
  </Form>
  /* END */

export default ResetSubmitExample
