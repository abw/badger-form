import React      from 'react'
import Changed    from './_examples/Changed.jsx'
import ChangedSrc from './_examples/Changed.jsx?raw'
import { Example } from '@abw/badger-website'

const StatusExamples = () =>
  <>
    <h2 className="font-mono">changed</h2>
    <p>
      The <code>changed</code> property indicates that the child content
      should only be rendered when a form field has been changed.
    </p>
    <Example
      Component={Changed}
      code={ChangedSrc}
      caption="changed"
      undent={2}
      expand
    />
  </>

export default StatusExamples
