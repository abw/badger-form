import React from 'react'
import userEvent from '@testing-library/user-event'
import { it, expect } from 'vitest'
import { render, act } from '@testing-library/react'
import { Form, Field } from '@/lib/index.js'

const ValidMessageTest = () =>
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

    // focus on foo field
    await act( () => user.click( container.querySelector('#foo') ) )
    await act( () => user.keyboard('Hello World') )

    // focus on bar field
    await act( () => user.click( container.querySelector('#bar') ) )

    const firstField = container.getElementsByClassName('field')[0]
    expect(firstField).toHaveClass('valid')

    const help = container.getElementsByClassName('help')[0]
    expect(help).toHaveTextContent('This is fine')
  }
)

