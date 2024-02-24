import React    from 'react'
import Example  from '@/site/Example.jsx'
import Space    from './_examples/Space.jsx'
import SpaceSrc from './_examples/Space.jsx?raw'

const ResetSubmitExamples = () =>
  <div className="prose flow">
    <h1>ResetSubmit Properties</h1>
    <h2 className="font-mono">space</h2>
    <p>
      The <code>space</code> property can be added to
      change the class to <code>flex space controls</code>.  This will space
      the controls to either side of the container.
    </p>
    <Example
      Component={Space}
      code={SpaceSrc}
      caption="space"
      undent={2}
      expand
    />
  </div>

export default ResetSubmitExamples