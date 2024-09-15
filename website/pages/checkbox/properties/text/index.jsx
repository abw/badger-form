import React     from 'react'
import Text      from './_examples/Text.jsx'
import TextSrc   from './_examples/Text.jsx?raw'
import { Example } from '@abw/badger-website'

const CheckboxExample = () =>
  <>
    <h2 className="font-mono">text</h2>
    <p>
      Use the <code>text</code> property to add some text to be displayed
      alongside the checkbox.
    </p>
    <Example
      Component={Text}
      code={TextSrc}
      caption="text"
      undent={2}
      expand
    />
  </>

export default CheckboxExample
