import React from 'react'
import { it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { Form, Field } from '@/lib/index.js'

it(
  'is disabled',
  () => {
    const { container } = render(
      <Form>
        <Field name="foo" label="Foo" disabled/>
      </Form>
    )
    expect(container.querySelector('div.field'))
      .toHaveClass('disabled')
    const input = container.querySelector('input')
    expect(input) .toHaveAttribute('disabled')
    expect(input) .toHaveAttribute(
      'aria-disabled',
      expect.stringContaining('true')
    )
  }
)

