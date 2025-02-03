import React from 'react'
import userEvent from '@testing-library/user-event'
import { it, expect } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import { Form, Field } from '@/lib/index'
import { useState } from 'react'

const InvalidTest = () => {
  const [msg, setMsg] = useState(false)
  return (
    <Form>
      <Field
        name="foo" label="Foo" id="foo" required validateOnBlur
        onInvalid={field => setMsg(`Foo is not valid: ${field.message}`)}
      />
      <Field
        name="bar" label="Bar" id="bar" required validateOnBlur
        onInvalid={field => setMsg(`Bar is not valid: ${field.message}`)}
        requiredMessage="You must enter a value"
      />
      { Boolean(msg) &&
        <div data-testid="msg">{msg}</div>
      }
    </Form>
  )
}

it(
  'should call onValid',
  async () => {
    const { container } = render(<InvalidTest/>)
    const foo = container.querySelector('#foo')
    const bar = container.querySelector('#bar')

    // focus on foo field
    await act( () => userEvent.click(foo) )

    // no message yet
    expect(screen.queryAllByTestId('msg').length).toBe(0)

    // focus on bar field
    await act( () => userEvent.click(bar) )

    // onInvalid should have been triggered
    expect(screen.getByTestId('msg'))
      .toHaveTextContent('Foo is not valid: A value is required')

    // focus on foo field
    await act( () => userEvent.click(foo) )

    // onInvalid should have been triggered
    expect(screen.getByTestId('msg'))
      .toHaveTextContent('Bar is not valid: You must enter a value')
  }
)
