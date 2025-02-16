import { Form, Field } from '@/lib/index'

{/* START */}
import ColorButtonInput from './ColorButtonInput.jsx'
// PRETEND: import { Form, Field } from '@abw/badger-form'

const UseInput = () =>
  <Form>
    <Field
      name="color"
      Input={ColorButtonInput}
    />
  </Form>

export default UseInput