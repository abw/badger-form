import React          from 'react'
import Example        from '../../site/Example.jsx'
import ResetCode      from '../../examples/control/Reset.jsx'
import ResetSrc       from '../../examples/control/Reset.jsx?raw'
import ResetPropsCode from '../../examples/control/ResetProps.jsx'
import ResetPropsSrc  from '../../examples/control/ResetProps.jsx?raw'
import ControlsPager  from '../../site/Pager/ControlsPager.jsx'
import { FormLink, ValuesLink } from '../../site/Links.jsx'

const Reset = () =>
  <div className="prose">
    <h1>Controls</h1>
    <h2 className="font-mono">Reset</h2>
    <p>
      Renders a form reset button.  If any <ValuesLink/> are defined
      for the <FormLink/> then the form will be reset to those values.
      Note that a limitation in React Hook Form means that if you
      provide any <code>values</code> to the form then it <b>MUST</b>{' '}
      contain default values for all fields.
    </p>
    <Example
      Component={ResetCode}
      code={ResetSrc}
      caption="Reset"
      expand
    />
    <p>
      The <code>className</code> property can be used to set a CSS class.
      The <code>text</code> property can be used to set the button text.
    </p>
    <Example
      Component={ResetPropsCode}
      code={ResetPropsSrc}
      caption="Reset Properties"
      expand
    />

    <ControlsPager/>
  </div>

export default Reset