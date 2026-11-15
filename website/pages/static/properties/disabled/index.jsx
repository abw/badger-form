import React       from 'react'
import Disabled    from './_examples/Disabled.jsx'
import DisabledSrc from './_examples/Disabled.jsx?raw'
import { Example } from '@abw/badger-website'

const DisabledExample = () =>
  <>
    <h2 className="font-mono">disabled</h2>
    <p>
      The default behaviour is for the static input to be displayed like a
      regular text field, but with no interactivity.
      You can set the <code>disabled</code> property on the field to
      show it as greyed out to reinforce the fact that the user can&rsquo;t
      interact with it.
    </p>
    <Example
      Component={Disabled}
      code={DisabledSrc}
      caption="disabled"
      undent={2}
      expand
      highlightLines="7,14"
    />
  </>

export default DisabledExample
