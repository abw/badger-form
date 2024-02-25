import React from 'react'
import { Form, Field } from '@/lib/index.js'

const Inline = () =>
  /* START */
  <Form>
    <Field
      type="radio"
      name="animal"
      label="Inline Options"
      options={['Badger', 'Ferret', 'Stoat', 'Weasel']}
      inline
    />
  </Form>
  /* END */

export default Inline