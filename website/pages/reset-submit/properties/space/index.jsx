import React       from 'react'
import Space       from './_examples/Space.jsx'
import SpaceSrc    from './_examples/Space.jsx?raw'
import { Example } from '@abw/badger-website'

const ResetSubmitExamples = () =>
  <>
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
  </>

export default ResetSubmitExamples