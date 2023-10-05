import React                from 'react'
import Example              from '../../site/Example.jsx'
import ResetSubmitCode      from '../../examples/control/ResetSubmit.jsx'
import ResetSubmitSrc       from '../../examples/control/ResetSubmit.jsx?raw'
import ResetSubmitGapCode   from '../../examples/control/ResetSubmitGap.jsx'
import ResetSubmitGapSrc    from '../../examples/control/ResetSubmitGap.jsx?raw'
import ResetSubmitSpaceCode from '../../examples/control/ResetSubmitSpace.jsx'
import ResetSubmitSpaceSrc  from '../../examples/control/ResetSubmitSpace.jsx?raw'
import ResetSubmitClassCode from '../../examples/control/ResetSubmitClass.jsx'
import ResetSubmitClassSrc  from '../../examples/control/ResetSubmitClass.jsx?raw'
import ResetSubmitPropsCode from '../../examples/control/ResetSubmitProps.jsx'
import ResetSubmitPropsSrc  from '../../examples/control/ResetSubmitProps.jsx?raw'
import ControlsPager        from '../../site/Pager/ControlsPager.jsx'
import { ResetLink, SubmitLink } from '../../site/Links.jsx'

const ResetSubmit = () =>
  <div className="prose">
    <h1>Controls</h1>
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

    <h3 className="font-mono">gap</h3>
    <p>
      The default CSS class for the container is <code>flex gap-4 controls</code>.
      The <code>gap</code> property can be passed to change the gap (in units
      of 0.25rem) between the buttons.
    </p>
    <Example
      Component={ResetSubmitGapCode}
      code={ResetSubmitGapSrc}
      caption="ResetSubmit Gap"
      expand
    />

    <h3 className="font-mono">space</h3>
    <p>
      The <code>space</code> property can be set to <code>true</code> to
      change the class to <code>flex space controls</code>.  This will space
      the controls to either side of the container.
    </p>
    <Example
      Component={ResetSubmitSpaceCode}
      code={ResetSubmitSpaceSrc}
      caption="ResetSubmit Space"
      expand
    />

    <h3 className="font-mono">className</h3>
    <p>
      The <code>className</code> property can be set to define your own
      CSS class for the container.  When this is defined the <code>gap</code>{' '}
      and <code>space</code> properties have no effect.
    </p>
    <p>
      In this example we use <code>flex space</code> to separate the buttons,
      along with <code>pad-2</code> to add some padding, <code>bgc-90</code> to
      set the background color to <code>grey-90</code> and <code>bdr-2</code> to
      set the border radius to 0.5em.  These are all utility classes provided
      by <a href="https://abw.github.io/badger-css/">Badger CSS</a>, but it
      works equally well with your own styles or those provided by a different
      CSS toolkit.
    </p>
    <Example
      Component={ResetSubmitClassCode}
      code={ResetSubmitClassSrc}
      caption="ResetSubmit ClassName"
      expand
    />

    <h3><span className="font-mono">reset</span> and <span className="font-mono">submit</span></h3>
    <p>
      The <code>reset</code> property can be used to set properties for the{' '}
      <ResetLink/> component.  The <code>submit</code> property can be used to
      set properties for the <SubmitLink/> component.
    </p>
    <Example
      Component={ResetSubmitPropsCode}
      code={ResetSubmitPropsSrc}
      caption="ResetSubmit Properties"
      expand
    />

    <ControlsPager/>
  </div>

export default ResetSubmit