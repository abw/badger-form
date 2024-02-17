import React from 'react'
import { it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { Form, Fieldset, Fields } from '../../lib/index.js'

const fields = {
  foo: {
    label: 'The foo field'
  },
  bar: {
    label: 'The bar field'
  }
}

it(
  'renders form fields',
  () => {
    const { container } = render(
      <Form fields={fields}>
        <Fieldset legend="Some Fields">
          <Fields names="foo bar"/>
        </Fieldset>
      </Form>
    )
    const input = container.querySelectorAll('input')
    expect(input[0]).toHaveAttribute('type', 'text')
    expect(input[1]).toHaveAttribute('type', 'text')

    const label = container.querySelectorAll('label')
    expect(label[0]).toHaveTextContent('The foo field')
    expect(label[1]).toHaveTextContent('The bar field')

    const legend = container.querySelector('fieldset legend')
    expect(legend).toHaveTextContent('Some Fields')
  }
)

