import React from 'react'
import userEvent from '@testing-library/user-event'
import { it, expect } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import { Form, Field } from '@/lib/index.js'
import { useState } from 'react'

const ValidTest = () => {
  const [msg, setMsg] = useState(false)
  return (
    <Form>
      <Field
        name="foo" label="Foo" id="foo" required validateOnBlur
        onValid={field => setMsg(`Foo is valid: ${field.value}`)}
      />
      <Field
        name="bar" label="Bar" id="bar" required validateOnBlur
        onValid={field => setMsg(`Bar is valid: ${field.value}`)}
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
    const user = userEvent.setup()
    const { container } = render(<ValidTest/>)
    const foo = container.querySelector('#foo')
    const bar = container.querySelector('#bar')

    // focus on foo field
    await act( () => user.click(foo) )

    // no message yet
    expect(screen.queryAllByTestId('msg').length).toBe(0)

    // type some input
    await act( () => user.keyboard('Hello') )

    // focus on bar field
    await act( () => user.click(bar) )

    // onValid should have been triggered
    expect(screen.getByTestId('msg'))
      .toHaveTextContent('Foo is valid: Hello')

    // type some input
    await act( () => user.keyboard('World') )

    // focus on foo field
    await act( () => user.click(foo) )

    // onValid should have been triggered
    expect(screen.getByTestId('msg'))
      .toHaveTextContent('Bar is valid: World')
  }
)
