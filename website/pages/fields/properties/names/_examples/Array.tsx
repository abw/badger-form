import { Form, Fields } from '@/lib/index'

{/* START */}
import fields from './Fields.jsx'
// PRETEND: import { Form, Fields } from '@abw/badger-form'

const FieldsExample = () =>
  <Form fields={fields}>
    <Fields names={['name', 'message', 'badgers', 'animal']}/>
  </Form>

export default FieldsExample
