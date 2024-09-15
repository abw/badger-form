import React       from 'react'
import Inline      from './_examples/Inline.jsx'
import InlineSrc   from './_examples/Inline.jsx?raw'
import { Example } from '@abw/badger-website'

const SelectExample = () =>
  <>
    <h2 className="font-mono">inline</h2>
    <p>
      The default behaviour is for the select input to be displayed as
      blocks that extends to the full width of the container.
      You can set the <code>inline</code> property on the field to
      display it inline.
    </p>
    <Example
      Component={Inline}
      code={InlineSrc}
      caption="inline"
      undent={2}
      expand
    />
  </>

export default SelectExample
