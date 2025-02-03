import React from 'react'
import userEvent from '@testing-library/user-event'
import { it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { Form, Field, Debug } from '../../lib/index'

const DebugExample = () =>
  <Form>
    <Field name="foo" id="foo" label="Foo"/>
    <Field name="bar" id="bar" label="Bar" value="World"/>
    <Debug/>
  </Form>

it(
  'should display Debug panel',
  async () => {
    const user = userEvent.setup()
    const { container } = render(<DebugExample/>)
    const foo = container.querySelector('#foo')
    const bar = container.querySelector('#bar')

    // focus on foo field and enter some text
    await user.click(foo)
    await user.keyboard('Hello')
    expect(foo).toHaveValue('Hello')

    // focus on bar field and enter some text
    await user.click(bar)
    await user.keyboard('!')
    expect(bar).toHaveValue('World!')

    // check debug panel is displaying values
    // screen.debug()
    // const debug = container.querySelector('div.info.alert')
    const rows = container.querySelectorAll('table tbody tr')
    // console.log(`rows: `, rows.length)

    const th0 = rows[0].querySelector('th')
    const td0 = rows[0].querySelector('td')
    const th1 = rows[1].querySelector('th')
    const td1 = rows[1].querySelector('td')
    expect(th0).toHaveTextContent('foo')
    expect(td0).toHaveTextContent('Hello')
    expect(th1).toHaveTextContent('bar')
    expect(td1).toHaveTextContent('World!')
  }
)
