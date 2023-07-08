import { Form, Field } from '../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/badger-form'

const RadioInputs = () =>
  <Form>
    <Field
      name="animal1" label="Default Style" type="radio"
      options={['Badger', 'Ferret', 'Stoat', 'Weasel']}
    />
    <Field
      name="animal2" label="Options Objects" type="radio"
      options={[
        { value: 'badger', text: 'Bobby Badger'  },
        { value: 'ferret', text: 'Franky Ferret' },
        { value: 'stoat',  text: 'Simon Stoat'   },
        { value: 'weasel', text: 'Willy Weasel'  }
      ]}
    />
    <Field
      name="animal3" label="Border Style" type="radio" border
      optionClass="mar-r-2"
      options={['Badger', 'Ferret', 'Stoat', 'Weasel']}
    />
    <Field
      name="animal4" label="Grid Layout" type="radio" border
      optionsClass="grid-2 gap-2"
      options={['Badger', 'Ferret', 'Stoat', 'Weasel']}
    />
  </Form>

export default RadioInputs