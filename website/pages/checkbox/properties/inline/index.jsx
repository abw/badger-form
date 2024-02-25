import React          from 'react'
import Inline         from './_examples/Inline.jsx'
import InlineSrc      from './_examples/Inline.jsx?raw'
import Example        from '@/site/Example.jsx'

const CheckboxExample = () =>
  <div className="prose flow">
    <h1>Checkbox Input Properties</h1>
    <h2 className="font-mono">inline</h2>
    <p>
      You can set the <code>inline</code> property on a field if you want
      the input to have fluid width.
    </p>
    <Example
      Component={Inline}
      code={InlineSrc}
      caption="inline"
      undent={2}
      expand
    />
  </div>

export default CheckboxExample
