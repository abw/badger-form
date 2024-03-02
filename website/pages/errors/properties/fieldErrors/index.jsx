import React      from 'react'
import Errors     from './_examples/Errors.jsx'
import ErrorsSrc  from './_examples/Errors.jsx?raw'
import Example    from '@/site/Example.jsx'
import Split      from '@/site/Split.jsx'
import TryItOut   from '@/site/TryItOut.jsx'

const ErrorsExamples = () =>
  <>
    <h2 className="font-mono">fieldErrors</h2>
    <Split>
      <p>
        The <code>fieldErrors</code> property can be set to have the component
        display any field validation errors.
      </p>
      <TryItOut>
        Try submitting the form without entering anything for Field One.
      </TryItOut>
    </Split>
    <Example
      Component={Errors}
      code={ErrorsSrc}
      caption="fieldErrors"
      undent={2}
      expand
    />
  </>

export default ErrorsExamples
