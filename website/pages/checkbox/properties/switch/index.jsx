import React     from 'react'
import Switch    from './_examples/Switch.jsx'
import SwitchSrc from './_examples/Switch.jsx?raw'
import Example   from '@/site/Example.jsx'

const CheckboxExample = () =>
  <>
    <h2 className="font-mono">switch</h2>
    <p>
      You can add the <code>switch</code> property to render the checkbox
      as a switch.  The <code>round</code> and <code>square</code> properties
      can be added to change the style.
    </p>
    <Example
      Component={Switch}
      code={SwitchSrc}
      caption="switch"
      undent={2}
      expand
    />
  </>

export default CheckboxExample
