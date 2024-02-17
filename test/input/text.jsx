import React from 'react'
import userEvent from '@testing-library/user-event'
import { it, expect } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import { Form, Field, useForm } from '../../lib/index.js'

const ShowValue = ({name}) => {
  const form = useForm()
  return (
    <div data-testid={`value-${name}`}>
      {form.values[name]}
    </div>
  )
}

it(
  'renders text input',
  () => {
    const { container } = render(
      <Form>
        <Field name="foo" id="foo"/>
      </Form>
    )
    const input = container.querySelector('input')
    expect(input).toHaveAttribute(
      'type',
      'text'
    )
  }
)

it(
  'sets text value',
  async () => {
    const user = userEvent.setup()
    const { container } = render(
      <Form>
        <Field name="foo" id="foo"/>
        <ShowValue name="foo"/>
      </Form>
    )
    expect(screen.getByTestId('value-foo'))
      .toHaveTextContent('')

    const input = container.querySelector('input')

    // type some input
    await act( () => user.click(input) )
    await act( () => user.keyboard('Hello') )

    expect(screen.getByTestId('value-foo'))
      .toHaveTextContent('Hello')
  }
)
