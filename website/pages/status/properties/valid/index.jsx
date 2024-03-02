import React      from 'react'
import Valid      from './_examples/Valid.jsx'
import ValidSrc   from './_examples/Valid.jsx?raw'
import Example    from '@/site/Example.jsx'
import TryItOut   from '@/site/TryItOut.jsx'
import Split      from '@/site/Split.jsx'

const StatusExamples = () =>
  <>
    <h2 className="font-mono">valid</h2>
    <Split>
      <p>
        The <code>valid</code> property indicates that the child content
        should only be rendered when the form has successfully validated.
      </p>
      <TryItOut>
        The field here is required.  If you enter a value and then click on
        the submit button you should see the form becomes valid.
      </TryItOut>
    </Split>
    <Example
      Component={Valid}
      code={ValidSrc}
      caption="valid"
      undent={2}
      expand
    />
  </>

export default StatusExamples
