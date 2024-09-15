import React       from 'react'
import Size        from './_examples/Size.jsx'
import SizeSrc     from './_examples/Size.jsx?raw'
import { Example } from '@abw/badger-website'

const CancelSubmitExamples = () =>
  <>
    <h2 className="font-mono">size</h2>
    <p>
      The <code>size</code> property can be added to set the overall size
      of the buttons.
    </p>
    <Example
      Component={Size}
      code={SizeSrc}
      caption="space"
      undent={2}
      expand
    />
  </>

export default CancelSubmitExamples