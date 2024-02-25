import React          from 'react'
import Inline         from './_examples/Inline.jsx'
import InlineSrc      from './_examples/Inline.jsx?raw'
import Example        from '@/site/Example.jsx'

const RadioExample = () =>
  <div className="prose flow">
    <h1>Radio Input Properties</h1>
    <h2 className="font-mono">inline</h2>
    <p>
      The default behaviour is for radio button options to be displayed as
      blocks that extend to the full width of the container.
      You can set the <code>inline</code> property on the field to
      display the options inline.
    </p>
    <Example
      Component={Inline}
      code={InlineSrc}
      caption="inline"
      undent={2}
      expand
    />
  </div>

export default RadioExample
