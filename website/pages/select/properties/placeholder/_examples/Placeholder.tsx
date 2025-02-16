import { Form, Field } from '@/lib/index'

const Placeholder = () =>
  /* START */
  <Form>
    <Field
      type="select"
      name="animal"
      label="Select Options"
      placeholder="Pick an animal"
      options={['Badger', 'Ferret', 'Stoat', 'Weasel']}
    />
  </Form>
  /* END */

export default Placeholder