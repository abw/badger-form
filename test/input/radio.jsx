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
  'renders radio input',
  async () => {
    render(
      <Form>
        <Field
          name="foo" type="radio"
          options={['alpha', 'bravo', 'charlie']}
        />
        <ShowValue name="foo"/>
      </Form>
    )
    const alpha   = screen.getByLabelText('alpha')
    const bravo   = screen.getByLabelText('bravo')
    const charlie = screen.getByLabelText('charlie')
    const output  = screen.getByTestId('value-foo')
    expect(output).toHaveTextContent('')

    await act( () => userEvent.click(alpha) )
    expect(output).toHaveTextContent('alpha')

    await act( () => userEvent.click(bravo) )
    expect(output).toHaveTextContent('bravo')

    await act( () => userEvent.click(charlie) )
    expect(output).toHaveTextContent('charlie')
  }
)

it(
  'renders radio input with values',
  async () => {
    render(
      <Form>
        <Field
          name="foo" type="radio"
          options={[
            { value: 'letter-a', text: 'alpha' },
            { value: 'letter-b', text: 'bravo' },
            { value: 'letter-c', text: 'charlie' },
          ]}
        />
        <ShowValue name="foo"/>
      </Form>
    )
    const alpha   = screen.getByLabelText('alpha')
    const bravo   = screen.getByLabelText('bravo')
    const charlie = screen.getByLabelText('charlie')
    const output  = screen.getByTestId('value-foo')
    expect(output).toHaveTextContent('')

    await act( () => userEvent.click(alpha) )
    expect(output).toHaveTextContent('letter-a')

    await act( () => userEvent.click(bravo) )
    expect(output).toHaveTextContent('letter-b')

    await act( () => userEvent.click(charlie) )
    expect(output).toHaveTextContent('letter-c')
  }
)

