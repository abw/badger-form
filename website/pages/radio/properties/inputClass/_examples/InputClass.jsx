import React from 'react'
import { Form, Field } from '@/lib/index.js'

const InputClass = () =>
  /* START */
  <Form>
    <Field
      type="radio"
      name="animal"
      label="Input Class"
      options={['Badger', 'Ferret', 'Stoat', 'Weasel']}
      inputClass="larger"
    />
  </Form>
  /* END */

export default InputClass