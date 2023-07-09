import React                from 'react'
import Example              from '../../site/Example.jsx'
import ResetSubmitCode      from '../../examples/control/ResetSubmit.jsx'
import ResetSubmitSrc       from '../../examples/control/ResetSubmit.jsx?raw'
import ResetSubmitPropsCode from '../../examples/control/ResetSubmitProps.jsx'
import ResetSubmitPropsSrc  from '../../examples/control/ResetSubmitProps.jsx?raw'
import ControlPager         from '../../site/Pager/ControlPager.jsx'
import { ResetLink, SubmitLink } from '../../site/Links.jsx'

const ResetSubmit = () =>
  <div className="prose">
    <h1>Control</h1>
    <h2 className="font-mono">ResetSubmit</h2>
    <p>
      Renders a <ResetLink/> button and a <SubmitLink/> button.
    </p>
    <Example
      Component={ResetSubmitCode}
      code={ResetSubmitSrc}
      caption="ResetSubmit"
      expand
    />
    <p>
      The <code>reset</code> property can be used to set properties for the{' '}
      <ResetLink/> component.  The <code>submit</code> property can be used to
      set properties for the <SubmitLink/> component.  The <code>className</code>{' '}
      property can be used to set the CSS class for the container.
    </p>
    <Example
      Component={ResetSubmitPropsCode}
      code={ResetSubmitPropsSrc}
      caption="ResetSubmit Properties"
      expand
    />

    <ControlPager/>
  </div>

export default ResetSubmit