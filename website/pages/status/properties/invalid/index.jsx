import React      from 'react'
import Invalid    from './_examples/Invalid.jsx'
import InvalidSrc from './_examples/Invalid.jsx?raw'
import TryItOut   from '@/site/TryItOut.jsx'
import { Example, Split } from '@abw/badger-website'

const StatusExamples = () =>
  <>
    <h2 className="font-mono">invalid</h2>
    <Split>
      <p>
        The <code>invalid</code> property indicates that the child content
        should only be rendered when the form has been validated and found
        to be invalid.
      </p>
      <TryItOut>
        The field here is required.  If you submit without entering a value
        you should see the form becomes invalid.
      </TryItOut>
    </Split>
    <Example
      Component={Invalid}
      code={InvalidSrc}
      caption="invalid"
      undent={2}
      expand
    />
  </>

export default StatusExamples
