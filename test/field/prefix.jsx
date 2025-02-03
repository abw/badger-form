import React from 'react'
import { it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { Form, Field } from '@/lib/index'

it(
  'has prefix',
  () => {
    const { container } = render(
      <Form>
        <Field name="foo" label="Foo" className="my-field" prefix="A"/>
      </Form>
    )
    const inputs = container.querySelector('div.my-field div.inputs')
    expect(inputs).toHaveClass('prefixed')
    const prefix = inputs.querySelector('div.prefix')
    expect(prefix).toHaveTextContent('A')
  }
)
