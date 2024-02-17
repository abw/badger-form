import React from 'react'
import userEvent from '@testing-library/user-event'
import { it, expect } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import { Form, Field, useForm } from '../../lib/index.js'

const ShowValue = ({name}) => {
  const form = useForm()
  return (
    <div data-testid={`value-${name}`}>
      {form.values[name] ? 'CHECKED' : 'UNCHECKED'}
    </div>
  )
}

it(
  'renders checkbox input',
  () => {
    const { container } = render(
      <Form>
        <Field name="foo" type="checkbox" id="check"/>
      </Form>
    )
    const input = container.querySelector('input')
    expect(input).toHaveAttribute(
      'type',
      'checkbox'
    )
  }
)

it(
  'sets checkbox value',
  async () => {
    const { container } = render(
      <Form>
        <Field name="foo" type="checkbox" id="check"/>
        <ShowValue name="foo"/>
      </Form>
    )
    expect(screen.getByTestId('value-foo'))
      .toHaveTextContent('UNCHECKED')

    const input = container.querySelector('input')
    await act( () => userEvent.click(input) )

    expect(screen.getByTestId('value-foo'))
      .toHaveTextContent('CHECKED')
  }
)

