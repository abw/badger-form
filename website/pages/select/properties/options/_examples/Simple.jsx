import React from 'react'
import { Form, Field } from '@/lib/index.js'

const Options = () =>
  /* START */
  <Form>
    <Field
      type="select"
      name="animal"
      label="Simple Options"
      options={['Badger', 'Ferret', 'Stoat', 'Weasel']}
    />
  </Form>
  /* END */

export default Options