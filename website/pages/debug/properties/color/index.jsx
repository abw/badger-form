import React    from 'react'
import Color    from './_examples/Color.jsx'
import ColorSrc from './_examples/Color.jsx?raw'
import { Example } from '@abw/badger-website'

const DebugExamples = () =>
  <>
    <h2 className="font-mono">color</h2>
    <p>
      You can use the <code>color</code> property to set the color for the
      table(s).  The default value is <code>brand</code>.
    </p>
    <Example
      Component={Color}
      code={ColorSrc}
      caption="color"
      undent={2}
      expand
    />
  </>

export default DebugExamples