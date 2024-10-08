import React      from 'react'
import Status     from './_examples/Status.jsx'
import StatusSrc  from './_examples/Status.jsx?raw'
import TryItOut   from '@/site/TryItOut.jsx'
import { Example, Split } from '@abw/badger-website'

const DebugExamples = () =>
  <>
    <h2 className="font-mono">status</h2>
    <Split>
      <p>
        You can use the <code>status</code> property to view the form status.
        This example includes some dummy handlers to wait 1 second after
        submission before returning a fake response, and then wait 1 second
        after receiving that response to reset the form.
      </p>
      <TryItOut>
        Try entering a message and then submit the form.  See how the
        form status changes when the form is submitted and after a response
        is received.  Also try NOT entering a message to see the invalid
        state.
      </TryItOut>
    </Split>
    <Example
      Component={Status}
      code={StatusSrc}
      caption="status"
      expand
    />
  </>

export default DebugExamples