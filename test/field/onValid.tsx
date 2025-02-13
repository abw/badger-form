import userEvent from '@testing-library/user-event'
import { it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Form, Field } from '@/lib/index'
import { useState } from 'react'
import { fail } from '@abw/badger-utils'

export const ValidTest = () => {
  const [msg, setMsg] = useState<string|null>()
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
    const foo = container.querySelector('#foo') || fail('no foo')
    const bar = container.querySelector('#bar') || fail('no bar')

    // focus on foo field
    await user.click(foo)

    // no message yet
    expect(screen.queryAllByTestId('msg').length).toBe(0)

    // type some input
    await user.keyboard('Hello')

    // focus on bar field
    await user.click(bar)

    // onValid should have been triggered
    expect(screen.getByTestId('msg'))
      .toHaveTextContent('Foo is valid: Hello')

    // type some input
    await user.keyboard('World')

    // focus on foo field
    await user.click(foo)

    // onValid should have been triggered
    expect(screen.getByTestId('msg'))
      .toHaveTextContent('Bar is valid: World')
  }
)
