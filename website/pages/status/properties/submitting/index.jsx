import React          from 'react'
import Submitting     from './_examples/Submitting.jsx'
import SubmittingSrc  from './_examples/Submitting.jsx?raw'
import TryItOut       from '@/site/TryItOut.jsx'
import { Example, Split } from '@abw/badger-website'
import { FormOnSubmitLink } from '@/site/Links.jsx'

const StatusExamples = () =>
  <>
    <h2 className="font-mono">submitting</h2>
    <Split>
      <p>
        The <code>submitting</code> property indicates that the child content
        should only be rendered while the form is submitting.
      </p>
      <TryItOut>
        Try submitting the form.  There&apos;s a dummy <FormOnSubmitLink/> function
        defined for the form which will wait for 1 second before returning
        so you can see the form change to the <code>submitting</code> state.
      </TryItOut>
    </Split>
    <Example
      Component={Submitting}
      code={SubmittingSrc}
      caption="submitting"
      expand
    />
  </>

export default StatusExamples
