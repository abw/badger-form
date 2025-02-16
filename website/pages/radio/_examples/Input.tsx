import { Form, Field } from '@/lib/index'

{/* START */}
// PRETEND: import { Form, Field } from '@abw/badger-form'

const RadioInput = () =>
  <Form>
    <Field
      type="radio"
      name="animal"
      label="Radio Buttons"
      options={[
        { value: 'badger', text: 'Bobby Badger', },
        { value: 'ferret', text: 'Franky Ferret' },
        { value: 'stoat',  text: 'Simon Stoat'   },
        { value: 'weasel', text: 'Willy Weasel'  }
      ]}
    />
  </Form>

export default RadioInput
