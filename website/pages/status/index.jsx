import React      from 'react'
import Status    from './_examples/Status.jsx'
import StatusSrc from './_examples/Status.jsx?raw'
import Example    from '@/site/Example.jsx'
import Split      from '@/site/Split.jsx'
import TryItOut   from '@/site/TryItOut.jsx'

const StatusExamples = () =>
  <div className="prose flow">
    <h1>Status</h1>
    <p className="intro wide">
      The <code>Status</code> component will only render its child components
      when the form status matches a particular condition.
    </p>
    <Split>
      <div>
        <p>
          The component expects one or more properties relating to different
          form status conditions:{' '}
          <code>changed</code>,{' '}
          <code>validating</code>,{' '}
          <code>valid</code>,{' '}
          <code>invalid</code>,{' '}
          <code>submitting</code> and{' '}
          <code>submitted</code>.
          The default behaviour is to only render the children when all of
          the specified conditions are met.  The <code>any</code> property
          can be provided to change that to match any condition.
        </p>
        <p>
          A simple example is shown below. The &quot;Reset&quot; and
          &quot;Submit&quot; buttons are only displayed once the user has
          made changes to a form field and the form <code>changed</code> status
          flag is true.
        </p>
      </div>
      <TryItOut>
        Edit one of the fields in the form and you should see the{' '}
        &quot;Reset&quot; and &quot;Submit&quot; buttons appear as if by
        magic.  Try clicking on the &quot;Reset&quot; button and they will
        be hidden again.
      </TryItOut>
    </Split>
    <Example
      Component={Status}
      code={StatusSrc}
      caption="Status"
      expand
    />
  </div>

export default StatusExamples
