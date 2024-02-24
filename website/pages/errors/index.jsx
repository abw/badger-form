import React      from 'react'
import Errors     from './_examples/Errors.jsx'
import ErrorsSrc  from './_examples/Errors.jsx?raw'
import Example    from '@/site/Example.jsx'
import Split      from '@/site/Split.jsx'
import TryItOut   from '@/site/TryItOut.jsx'

const ErrorsExamples = () =>
  <div className="prose flow">
    <h1>Errors</h1>
    <p className="intro wide">
      The <code>Errors</code> component can be used to display any form
      validation errors.
    </p>
    <Split>
      <p>
        A typical example is shown below.
      </p>
      <TryItOut>
        TODO
      </TryItOut>
    </Split>
    <Example
      Component={Errors}
      code={ErrorsSrc}
      caption="Errors"
      expand
    />
  </div>

export default ErrorsExamples
