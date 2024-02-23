import React    from 'react'
import Example  from '@/site/Example.jsx'
import Color    from './_examples/Color.jsx'
import ColorSrc from './_examples/Color.jsx?raw'

const DebugExamples = () =>
  <div className="prose flow">
    <h1>Debug Properties</h1>
    <h2 className="font-mono">color</h2>
    <p>
      You can use the <code>color</code> property to set the color for the
      table(s).  The default value is <code>brand</code>.
    </p>
    <Example
      Component={Color}
      code={ColorSrc}
      caption="color"
      expand
    />


  </div>

export default DebugExamples