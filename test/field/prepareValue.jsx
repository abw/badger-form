import React from 'react'
import userEvent from '@testing-library/user-event'
import { it, expect } from 'vitest'
import { render, act } from '@testing-library/react'
import { Form, Field } from '@/lib/index.js'

const PrepareTest = () =>
  <Form>
    <Field
      name="foo" id="foo"
      prepareValue={value => value.toUpperCase()}
    />
  </Form>


it(
  'should call prepareValue',
  async () => {
    const user = userEvent.setup()
    const { container } = render(<PrepareTest/>)

    // focus on foo field
    const foo = container.querySelector('#foo')
    await act( () => user.click(foo) )

    // type some input
    await act( () => user.keyboard('Hello') )
    expect(foo).toHaveValue('HELLO')
  }
)
