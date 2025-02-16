import { Form, Field, ResetSubmit } from '@/lib/index'

{/* START */}
// PRETEND: import { Form, Field, ResetSubmit } from '@abw/badger-form'
import Toppings from './Toppings'
import { PizzaFields } from './types'
import './pizza.scss'

const fields: PizzaFields = {
  toppings: {
    Layout:   Toppings,
    label:    'Pick your toppings',
    default:  [ ],
    free:     3,
    price:    '£1.00',
    toppings: [
      'Ham',
      'Bacon',
      'Onions',
      'Sausage',
      'Pepperoni',
      'Mushrooms',
      'Sweetcorn',
      'Pineapple',
      'Extra Cheese',
    ],
  }
}

const PizzaForm = () =>
  <Form fields={fields}>
    <Field name="toppings"/>
    <ResetSubmit
      space
      submit={{
        text: 'Order Pizza',
        className: 'blue'
      }}
    />
  </Form>

export default PizzaForm