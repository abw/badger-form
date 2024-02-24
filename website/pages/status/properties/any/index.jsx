import React      from 'react'
import Any        from './_examples/Any.jsx'
import AnySrc     from './_examples/Any.jsx?raw'
import Example    from '@/site/Example.jsx'
import TryItOut   from '@/site/TryItOut.jsx'
import Split      from '@/site/Split.jsx'
import { DebugLink } from '@/website/site/Links.jsx'

const StatusExamples = () =>
  <div className="prose flow">
    <h1>Status Properties</h1>
    <h2 className="font-mono">any</h2>
    <Split>
      <div>
        <p>
          The <code>any</code> property indicates that the child content
          should only be rendered when any of the specified conditions are
          true.  This changes the default behaviour which is to required that
          all specified conditions are met.
        </p>
        <p>
          The example below includes the <DebugLink/> component so that you
          can see the form status changing.
        </p>
      </div>
      <TryItOut>
        The field here is required.  If you enter a value and then click on
        the submit button the form will become valid.  If you don&apos;t enter
        a value then it will be invalid.  Either way the alert will be shown
        because it satisfied the condition that any of the valid or invalid
        states are true.
      </TryItOut>
    </Split>
    <Example
      Component={Any}
      code={AnySrc}
      caption="any"
      undent={2}
      expand
    />
  </div>

export default StatusExamples
