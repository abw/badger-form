import React from 'react'
import userEvent from '@testing-library/user-event'
import { it, expect } from 'vitest'
import { render, act } from '@testing-library/react'
import { Form, Field } from '@/lib/index'

const RequiredTest = () =>
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

    // focus on foo field
    await act( () => user.click( container.querySelector('#foo') ) )

    // focus on bar field
    await act( () => user.click( container.querySelector('#bar') ) )

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

    // focus on bar field
    await act( () => user.click( container.querySelector('#bar') ) )

    // focus on foo field
    await act( () => user.click( container.querySelector('#foo') ) )

    // second field should be invalid
    const firstField = container.getElementsByClassName('field')[1]
    expect(firstField).toHaveClass('invalid')

    // help should show custom error message
    const help = container.getElementsByClassName('help')[0]
    expect(help).toHaveTextContent('You must enter a value')
  }
)
