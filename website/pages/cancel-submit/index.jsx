import React                from 'react'
import CancelSubmit         from './_examples/CancelSubmit.jsx'
import CancelSubmitSrc      from './_examples/CancelSubmit.jsx?raw'
import Example              from '@/site/Example.jsx'
import CancelSubmitPager    from '@/site/Pager/CancelSubmitPager.jsx'
import { SubmitLink }       from '@/site/Links.jsx'

const CancelSubmitExamples = () =>
  <div className="prose flow">
    <h1>CancelSubmit</h1>
    <p className="intro wide">
      Renders a cancel button and a <SubmitLink/> button.
    </p>
    <p>
      This example shows how you might want to toggle between &quot;view&quot;{' '}
      and &quot;edit&quot; mode.  Click on the edit button to start editing.
      The cancel button will then switch back to view mode without saving
      any changes
    </p>
    <Example
      Component={CancelSubmit}
      code={CancelSubmitSrc}
      caption="CancelSubmit"
      expand
    />
    <CancelSubmitPager/>
  </div>

export default CancelSubmitExamples