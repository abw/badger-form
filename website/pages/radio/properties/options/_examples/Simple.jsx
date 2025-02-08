import React from 'react'
import { Form, Field } from '@/lib/index'

const Options = () =>
  /* START */
  <Form>
    <Field
      type="radio"
      name="animal"
      label="Simple Options"
      options={['Badger', 'Ferret', 'Stoat', 'Weasel']}
    />
  </Form>
  /* END */

export default Options