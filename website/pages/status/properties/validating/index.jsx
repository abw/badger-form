import React          from 'react'
import Validating     from './_examples/Validating.jsx'
import ValidatingSrc  from './_examples/Validating.jsx?raw'
import TryItOut       from '@/site/TryItOut.jsx'
import { Example, Split } from '@abw/badger-website'
import { FieldValidateLink } from '@/site/Links.jsx'

const StatusExamples = () =>
  <>
    <h2 className="font-mono">validating</h2>
    <Split>
      <p>
        The <code>validating</code> property indicates that the child content
        should only be rendered while the form is validating.
      </p>
      <TryItOut>
        Try submitting the form.  There&apos;s a dummy <FieldValidateLink/> function
        defined for the field which will wait for 1 second before returning
        so you can see the form change to the <code>validating</code> state.
      </TryItOut>
    </Split>
    <Example
      Component={Validating}
      code={ValidatingSrc}
      caption="validating"
      expand
    />
  </>

export default StatusExamples
