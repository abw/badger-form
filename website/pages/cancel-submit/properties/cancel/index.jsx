import React      from 'react'
import Example    from '@/site/Example.jsx'
import Cancel      from './_examples/Cancel.jsx'
import CancelSrc   from './_examples/Cancel.jsx?raw'

const CancelSubmitExamples = () =>
  <>
    <h2 className="font-mono">cancel</h2>
    <p>
      The <code>cancel</code> property can be used to pass properties to
      the cancel button.
    </p>
    <Example
      Component={Cancel}
      code={CancelSrc}
      caption="reset"
      undent={2}
      expand
    />
  </>

export default CancelSubmitExamples