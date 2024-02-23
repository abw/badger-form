import React      from 'react'
import Changed    from './_examples/Changed.jsx'
import ChangedSrc from './_examples/Changed.jsx?raw'
import Example    from '@/site/Example.jsx'
import Split      from '@/site/Split.jsx'
import TryItOut   from '@/site/TryItOut.jsx'

const ChangedExamples = () =>
  <div className="prose flow">
    <h1>Changed</h1>
    <p className="intro wide">
      The <code>Changed</code> component will only render its child components
      when the form state has changed.
    </p>
    <Split>
      <p>
        A typical example is shown below.  The &quot;Reset&quot; and
        &quot;Submit&quot; buttons are only displayed once the user has
        made changes to a form field.
      </p>
      <TryItOut>
        Edit one of the fields in the form and you should see the{' '}
        &quot;Reset&quot; and &quot;Submit&quot; buttons appear as if by
        magic.  Try clicking on the &quot;Reset&quot; button and they will
        be hidden again.
      </TryItOut>
    </Split>
    <Example
      Component={Changed}
      code={ChangedSrc}
      caption="Changed"
      expand
    />
  </div>

export default ChangedExamples
