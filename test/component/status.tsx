import userEvent from '@testing-library/user-event'
import { act } from 'react'
import { it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Form, Field, Status, ResetSubmit } from '@/lib/index'

const StatusExample = () =>
  <Form>
    <Field name="foo" id="foo" label="Foo"/>
    <Field name="bar" id="bar" label="Bar" value="World"/>
    <Status changed>
      <ResetSubmit/>
      <div data-testid="changed">Form has changed!</div>
    </Status>
    <Status not changed>
      <div data-testid="not-changed">Form has not changed</div>
    </Status>
  </Form>

it(
  'should display ResetSubmit when changed',
  async () => {
    const user = userEvent.setup()
    const { container } = render(<StatusExample/>)
    const foo = container.querySelector('#foo')
    const bar = container.querySelector('#bar')

    // no changed message yet
    expect(screen.queryAllByTestId('changed').length).toBe(0)
    // but we should have the not changed message
    expect(screen.getByTestId('not-changed'))
      .toHaveTextContent('Form has not changed')

    // focus on foo field and enter some text
    await act( () => user.click(foo) )
    await act( () => user.keyboard('Hello') )
    expect(foo).toHaveValue('Hello')

    // changed message should be displayed
    expect(screen.getByTestId('changed'))
      .toHaveTextContent('Form has changed!')

    // not changed message should no longer be displayed
    expect(screen.queryAllByTestId('not-changed').length).toBe(0)

    // focus on bar field and enter some text
    await act( () => user.click(bar) )
    await act( () => user.keyboard('!') )
    expect(bar).toHaveValue('World!')

    // click on the reset button
    await act( () => user.click(screen.getByRole('button', { name: /reset/i })) )

    // changed message no longer displayed
    expect(screen.queryAllByTestId('changed').length).toBe(0)
    // changed message displayed again
    expect(screen.getByTestId('not-changed'))
      .toHaveTextContent('Form has not changed')

  }
)
