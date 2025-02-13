import userEvent from '@testing-library/user-event'
import { it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Form, Field, Submit, FieldValues } from '../../lib/index'
import { useState } from 'react'
import { fail } from '@abw/badger-utils'

export const SubmitTest = () => {
  const [values, setValues] = useState<FieldValues>({})
  return (
    <Form
      values={{ foo: 'Hello' }}
      onSubmit={
        values => {
          setValues(values)
          return { ok: true }
        }
      }
    >
      <Field name="foo" id="foo" label="The Foo Field"/>
      <Submit/>
      <div data-testid="msg">{values.foo as string}</div>
    </Form>
  )
}

it(
  'should submit form',
  async () => {
    const { container } = render(<SubmitTest/>)
    const user   = userEvent.setup()
    const foo    = container.querySelector('#foo') || fail('no foo')
    const msg    = screen.getByTestId('msg')
    const submit = screen.getByRole('button', { name: /submit/i })

    // click on submit button
    await user.click(submit)

    // msg should be rendered
    expect(msg).toHaveTextContent('Hello')

    // focus on foo field and type some more input
    await user.click(foo)
    await user.keyboard(' World')

    // click on submit button
    await user.click(submit)

    // updated msg should be rendered
    expect(msg).toHaveTextContent('Hello World')
  }
)
