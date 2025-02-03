import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Form, Fields } from '@/lib/index'

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
        <Fields names="foo bar"/>
      </Form>
    )
    const input = container.querySelectorAll('input')
    expect(input[0]).toHaveAttribute('type', 'text')
    expect(input[1]).toHaveAttribute('type', 'text')

    const label = container.querySelectorAll('label')
    expect(label[0]).toHaveTextContent('The foo field')
    expect(label[1]).toHaveTextContent('The bar field')
  }
)

describe.skip(
  'No longer works',
  () => it(
    'renders form fields with props passed down',
    () => {
      const { container } = render(
        <Form fields={fields} showRequired>
          <Fields names="foo bar" wide/>
        </Form>
      )
      screen.debug()
      const input = container.querySelectorAll('input')
      expect(input[0]).toHaveAttribute('type', 'text')
      expect(input[1]).toHaveAttribute('type', 'text')

      const label = container.querySelectorAll('label')
      expect(label[0]).toHaveTextContent('The foo field')
      expect(label[1]).toHaveTextContent('The bar field')

      const inputs = container.querySelectorAll('div.input')
      expect(inputs[0]).toHaveClass('wide')
      expect(inputs[1]).toHaveClass('wide')
    }
  )
)