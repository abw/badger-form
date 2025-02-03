import React from 'react'
import userEvent from '@testing-library/user-event'
import { it, expect } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import { Form, Field, Changed, ResetSubmit } from '@/lib/index'

const ChangedExample = () =>
  <Form>
    <Field name="foo" id="foo" label="Foo"/>
    <Field name="bar" id="bar" label="Bar" value="World"/>
    <Changed>
      <ResetSubmit/>
      <div data-testid="changed">Form has changed!</div>
    </Changed>
  </Form>

it(
  'should display ResetSubmit when changed',
  async () => {
    const user = userEvent.setup()
    const { container } = render(<ChangedExample/>)
    const foo = container.querySelector('#foo')
    const bar = container.querySelector('#bar')

    // no changed message yet
    expect(screen.queryAllByTestId('changed').length).toBe(0)

    // focus on foo field and enter some text
    await act( () => user.click(foo) )
    await act( () => user.keyboard('Hello') )
    expect(foo).toHaveValue('Hello')

    // changed message should be displayed
    expect(screen.getByTestId('changed'))
      .toHaveTextContent('Form has changed!')

    // focus on bar field and enter some text
    await act( () => user.click(bar) )
    await act( () => user.keyboard('!') )
    expect(bar).toHaveValue('World!')

    // click on the reset button
    await act( () => user.click(screen.getByRole('button', { name: /reset/i })) )

    // no changed message displayed
    expect(screen.queryAllByTestId('changed').length).toBe(0)
  }
)
