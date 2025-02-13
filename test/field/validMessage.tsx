import userEvent from '@testing-library/user-event'
import { it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { Form, Field } from '@/lib/index'
import { fail } from '@abw/badger-utils'

export const ValidMessageTest = () =>
  <Form>
    <Field
      name="foo" id="foo" required validateOnBlur
      validMessage="This is fine"
    />
    <Field
      name="bar" id="bar"
    />
  </Form>

it(
  'should validate on blur',
  async () => {
    const user = userEvent.setup()
    const { container } = render(<ValidMessageTest/>)
    const foo = container.querySelector('#foo') || fail('no foo')
    const bar = container.querySelector('#bar') || fail('no bar')

    // focus on foo field
    await user.click(foo)
    await user.keyboard('Hello World')

    // focus on bar field
    await user.click(bar)

    const firstField = container.getElementsByClassName('field')[0]
    expect(firstField).toHaveClass('valid')

    const help = container.getElementsByClassName('help')[0]
    expect(help).toHaveTextContent('This is fine')
  }
)

