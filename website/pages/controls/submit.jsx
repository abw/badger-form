import React           from 'react'
import Example         from '../../site/Example.jsx'
import SubmitCode      from '../../examples/control/Submit.jsx'
import SubmitSrc       from '../../examples/control/Submit.jsx?raw'
import SubmitPropsCode from '../../examples/control/SubmitProps.jsx'
import SubmitPropsSrc  from '../../examples/control/SubmitProps.jsx?raw'
import ControlsPager   from '../../site/Pager/ControlsPager.jsx'
import { FormLink, OnSubmitLink } from '../../site/Links.jsx'

const Submit = () =>
  <div className="prose">
    <h1>Controls</h1>
    <h2 className="font-mono">Submit</h2>
    <p>
      Renders a form submit button.  When clicked the button will submit
      the form.  You should define an <OnSubmitLink/> handler for the{' '}
      <FormLink/> to handle the submission.
    </p>
    <Example
      Component={SubmitCode}
      code={SubmitSrc}
      caption="Submit"
      expand
    />
    <p>
      The <code>className</code> property can be used to set a CSS class.
      The <code>text</code> property can be used to set the button text.
    </p>
    <Example
      Component={SubmitPropsCode}
      code={SubmitPropsSrc}
      caption="Submit Properties"
      expand
    />

    <ControlsPager/>
  </div>

export default Submit