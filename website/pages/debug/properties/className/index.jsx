import React        from 'react'
import Example      from '@/site/Example.jsx'
import ClassName    from './_examples/ClassName.jsx'
import ClassNameSrc from './_examples/ClassName.jsx?raw'

const DebugExamples = () =>
  <>
    <h2 className="font-mono">className</h2>
    <p>
      You can use the <code>className</code> property to set the CSS class
      for the debugging container element.
    </p>
    <Example
      Component={ClassName}
      code={ClassNameSrc}
      caption="className"
      undent={2}
      expand
    />
  </>

export default DebugExamples