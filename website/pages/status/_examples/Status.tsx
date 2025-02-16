import { Form, Field, Status, ResetSubmit } from '@/lib/index'

{/* START */}
// PRETEND: import { Form, Field, Status, ResetSubmit } from '@abw/badger-form'

const StatusExample = () =>
  <Form>
    <Field name="field1" label="Field One"/>
    <Field name="field2" label="Field Two" value="Hello World!"/>
    <Status changed>
      <ResetSubmit
        space
        reset={{ className: 'outline' }}
        submit={{ className: 'blue' }}
      />
    </Status>
    <Status not changed>
      Make a change to either of the fields.
    </Status>
  </Form>

export default StatusExample