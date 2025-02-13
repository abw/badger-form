import userEvent from '@testing-library/user-event'
import { it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { Form, Field } from '@/lib/index'
import { fail } from '@abw/badger-utils'

export const RequiredTest = () =>
  <Form>
    <Field
      name="foo" id="foo" required validateOnBlur
    />
    <Field
      name="bar" id="bar" required validateOnBlur
      requiredMessage="You must enter a value"
    />
  </Form>

it(
  'should validate on blur',
  async () => {
    const user = userEvent.setup()
    const { container } = render(<RequiredTest/>)
    const foo = container.querySelector('#foo') || fail('no foo')
    const bar = container.querySelector('#bar') || fail('no bar')

    // focus on foo field
    await user.click(foo)

    // focus on bar field
    await user.click(bar)

    const firstField = container.getElementsByClassName('field')[0]
    expect(firstField).toHaveClass('invalid')

    const help = container.getElementsByClassName('help')[0]
    expect(help).toHaveTextContent('A value is required')
  }
)

it(
  'should have a custom required message',
  async () => {
    const user = userEvent.setup()
    const { container } = render(<RequiredTest/>)
    const foo = container.querySelector('#foo') || fail('no foo')
    const bar = container.querySelector('#bar') || fail('no bar')

    // focus on bar field
    await user.click(bar)

    // focus on foo field
    await user.click(foo)

    // second field should be invalid
    const firstField = container.getElementsByClassName('field')[1]
    expect(firstField).toHaveClass('invalid')

    // help should show custom error message
    const help = container.getElementsByClassName('help')[0]
    expect(help).toHaveTextContent('You must enter a value')
  }
)
