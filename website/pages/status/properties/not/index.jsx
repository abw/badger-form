import React      from 'react'
import Not        from './_examples/Not.jsx'
import NotSrc     from './_examples/Not.jsx?raw'
import TryItOut   from '@/site/TryItOut.jsx'
import { DebugLink } from '@/website/site/Links.jsx'
import { Example, Split } from '@abw/badger-website'

const StatusExamples = () =>
  <>
    <h2 className="font-mono">not</h2>
    <Split>
      <div>
        <p>
          The <code>not</code> property indicates that the child content
          should only be rendered when the specified conditions are not true.
          It can be combined with the <code>any</code> property if necessary.
        </p>
        <p>
          The example below includes the <DebugLink/> component so that you
          can see the form status changing.
        </p>
      </div>
      <TryItOut>
        The Reset and Submit buttons will only be displayed when the form
        as been changed.  An info alert is displayed when in their place
        when the form has <b>not</b> been changed.
      </TryItOut>
    </Split>
    <Example
      Component={Not}
      code={NotSrc}
      caption="not"
      undent={2}
      expand
    />
  </>

export default StatusExamples
