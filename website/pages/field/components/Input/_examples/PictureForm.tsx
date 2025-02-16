import { Form, Field, ResetSubmit } from '@/lib/index'

{/* START */}
import PictureInput from './PictureInput.jsx'
// PRETEND: import { Form, Field, ResetSubmit } from '@abw/badger-form'
import './animals.css'

const PictureForm = () =>
  <Form>
    <Field
      name="animal" label="Pick an animal guide"
      requiredMessage="You must pick an animal"
      required
      Input={PictureInput}
    />
    <ResetSubmit
      reset={{ className: 'outline' }}
      submit={{ className: 'blue' }}
    />
  </Form>

export default PictureForm