import React          from 'react'
import Submitted      from './_examples/Submitted.jsx'
import SubmittedSrc   from './_examples/Submitted.jsx?raw'
import TryItOut       from '@/site/TryItOut.jsx'
import { Example, Split } from '@abw/badger-website'

const StatusExamples = () =>
  <>
    <h2 className="font-mono">submitted</h2>
    <Split>
      <p>
        The <code>submitted</code> property indicates that the child content
        should only be rendered after the form has been submitted.
      </p>
      <TryItOut>
        Try submitting the form.  You can see the form change to
        the <code>submitted</code> state.
      </TryItOut>
    </Split>
    <Example
      Component={Submitted}
      code={SubmittedSrc}
      caption="submitted"
      expand
    />
  </>

export default StatusExamples
