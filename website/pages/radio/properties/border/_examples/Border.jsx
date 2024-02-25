import React from 'react'
import { Form, Field } from '@/lib/index.js'

const Border = () =>
  /* START */
  <Form>
    <Field
      type="radio"
      name="animal1"
      label="Border Options"
      options={['Badger', 'Ferret', 'Stoat', 'Weasel']}
      optionClass="mar-b-2"
      border
    />
    <Field
      type="radio"
      name="animal1"
      label="Inline Border Options"
      options={['Badger', 'Ferret', 'Stoat', 'Weasel']}
      optionClass="mar-r-2"
      border inline
    />
  </Form>
  /* END */

export default Border