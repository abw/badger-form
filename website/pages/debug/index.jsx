import React      from 'react'
import Debug      from './_examples/Debug.jsx'
import DebugSrc   from './_examples/Debug.jsx?raw'
import Example    from '@/site/Example.jsx'
import Split      from '@/site/Split.jsx'
import TryItOut   from '@/site/TryItOut.jsx'
import SeeAlso    from '@/site/SeeAlso.jsx'
import { FormDebugLink } from '@/site/Links.jsx'

const DebugExamples = () =>
  <div className="prose flow">
    <h1>Debug</h1>
    <p className="intro wide">
      The <code>Debug</code> component can be used in development to debug
      your form.
    </p>
    <Split>
      <p>
        In the words of Robert &quot;Mr T&quot; Burns: <i>&quot;The best
        laid schemes of mice and men gang aft a-gley, and I pity the fool
        who doesn&apos;t have some good debugging tools on hand for when
        things go a bit pear-shaped&quot;</i>.
        The example below shows the default behaviour which is to display the
        form values.
      </p>
      <TryItOut>
        Try updating the form values and see how the debugging data changes.
      </TryItOut>
    </Split>
    <Example
      Component={Debug}
      code={DebugSrc}
      caption="Debug"
      expand
    />
    <SeeAlso
      links={[
        FormDebugLink
      ]}
    />

  </div>

export default DebugExamples
