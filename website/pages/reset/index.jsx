import React    from 'react'
import Reset    from './_examples/Reset.jsx'
import ResetSrc from './_examples/Reset.jsx?raw'
import Example  from '@/site/Example.jsx'
import TryItOut from '@/site/TryItOut.jsx'
import Split    from '@/site/Split.jsx'
import {
  FieldDefaultLink, FormLink, FormOnResetLink, FormValuesLink
} from '@/site/Links.jsx'

const ResetExamples = () =>
  <div className="prose flow">
    <h1>Reset</h1>
    <p className="intro wide">
      The <code>Reset</code> component can be used to add a reset button
      which will reset the form to its initial state.
    </p>
    <Split>
      <p>
        Any{' '}
        <FormValuesLink/> defined on the <FormLink/> will be restored.
        Any fields that have a <FieldDefaultLink/> value will be reset to that
        value.  You can also define a <FormLink/> <FormOnResetLink/> handler
        which will be called when the form is reset.
      </p>
      <TryItOut>
        Try entering some values in the form below and then click on the reset
        button.
      </TryItOut>
    </Split>
    <Example
      Component={Reset}
      code={ResetSrc}
      caption="Reset"
      expand
    />
  </div>

export default ResetExamples
