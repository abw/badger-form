import { Form, Field } from '../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/badger-form'

const SelectInputs = () =>
  <Form>
    <Field
      name="animal" label="Animal" type="select"
      options={['Badger', 'Ferret', 'Stoat', 'Weasel']}
    />
    <Field
      name="volume" label="Volume" type="select"
      options={[
        { value: 10, text: 'Ten (Loud)'    },
        { value: 11, text: 'Eleven (One Louder)' }
      ]}
    />
  </Form>

export default SelectInputs