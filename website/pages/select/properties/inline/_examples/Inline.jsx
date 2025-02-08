import React from 'react'
import { Form, Field } from '@/lib/index'

const Inline = () =>
  /* START */
  <Form>
    <Field
      name="animal"
      type="select"
      label="Pick an animal"
      options={['Badger', 'Ferret', 'Stoat', 'Weasel']}
      inline
    />
  </Form>
  /* END */

export default Inline