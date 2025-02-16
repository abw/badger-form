import { Form, Field, addInputType } from '@/lib/index'

{/* START */}
import ColorButtonInput from './ColorButtonInput.jsx'
// PRETEND: import { Form, Field, addInputType } from '@abw/badger-form'

addInputType('colorButton', ColorButtonInput)

const AddInput = () =>
  <Form>
    <Field
      name="color"
      type="colorButton"
    />
    <Field
      name="color"
      type="color-button"
    />
    <Field
      name="color"
      type="colorbutton"
    />
  </Form>

export default AddInput