import React from 'react'
import { it, expect } from 'vitest'
import userEvent from '@testing-library/user-event'
import { render, screen, act, fireEvent } from '@testing-library/react'
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
  'renders select input',
  async () => {
    const { container } = render(
      <Form>
        <Field
          name="foo" type="select"
          options={['alpha', 'bravo', 'charlie']}
        />
        <ShowValue name="foo"/>
      </Form>
    )
    const select  = container.querySelector('select')
    const options = container.querySelectorAll('option')
    const output  = screen.getByTestId('value-foo')

    expect(options[0]).toHaveTextContent('alpha')
    expect(options[1]).toHaveTextContent('bravo')
    expect(options[2]).toHaveTextContent('charlie')

    fireEvent.change(select, { target: { value: 'alpha' } })
    expect(output).toHaveTextContent('alpha')

    fireEvent.change(select, { target: { value: 'bravo' } })
    expect(output).toHaveTextContent('bravo')

    fireEvent.change(select, { target: { value: 'charlie' } })
    expect(output).toHaveTextContent('charlie')
  }
)

it(
  'renders select input with values',
  async () => {
    const { container } = render(
      <Form>
        <Field
          name="foo" type="select"
          options={[
            { value: 'letter-a', text: 'alpha' },
            { value: 'letter-b', text: 'bravo' },
            { value: 'letter-c', text: 'charlie' },
          ]}
        />
        <ShowValue name="foo"/>
      </Form>
    )
    const select  = screen.getByRole('combobox')
    const options = container.querySelectorAll('option')
    const output  = screen.getByTestId('value-foo')

    expect(options[0]).toHaveTextContent('alpha')
    expect(options[1]).toHaveTextContent('bravo')
    expect(options[2]).toHaveTextContent('charlie')

    await act( () => userEvent.selectOptions(select, options[0]) )
    expect(options[0].selected).toBe(true)
    expect(output).toHaveTextContent('letter-a')

    await act( () => userEvent.selectOptions(select, options[1]) )
    expect(options[0].selected).toBe(false)
    expect(options[1].selected).toBe(true)
    expect(output).toHaveTextContent('letter-b')

    await act( () => userEvent.selectOptions(select, options[2]) )
    expect(options[0].selected).toBe(false)
    expect(options[1].selected).toBe(false)
    expect(options[2].selected).toBe(true)
    expect(output).toHaveTextContent('letter-c')

  }
)

it(
  'renders select input with placeholder',
  async () => {
    const { container } = render(
      <Form>
        <Field
          name="foo" type="select"
          placeholder="Select an option"
          options={['alpha', 'bravo', 'charlie']}
        />
        <ShowValue name="foo"/>
      </Form>
    )
    const select  = screen.getByRole('combobox')
    const options = container.querySelectorAll('option')
    const output  = screen.getByTestId('value-foo')

    expect(options[0]).toHaveAttribute('hidden')
    expect(options[0]).toHaveAttribute('disabled')
    expect(options[0]).toHaveTextContent('Select an option')
    expect(options[1]).toHaveTextContent('alpha')
    expect(options[2]).toHaveTextContent('bravo')
    expect(options[3]).toHaveTextContent('charlie')

    await act( () => userEvent.selectOptions(select, options[1]) )
    expect(options[1].selected).toBe(true)
    expect(output).toHaveTextContent('alpha')

    await act( () => userEvent.selectOptions(select, options[2]) )
    expect(options[1].selected).toBe(false)
    expect(options[2].selected).toBe(true)
    expect(output).toHaveTextContent('bravo')

    await act( () => userEvent.selectOptions(select, options[3]) )
    expect(options[1].selected).toBe(false)
    expect(options[2].selected).toBe(false)
    expect(options[3].selected).toBe(true)
    expect(output).toHaveTextContent('charlie')
  }
)

