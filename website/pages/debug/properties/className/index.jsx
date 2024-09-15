import React        from 'react'
import ClassName    from './_examples/ClassName.jsx'
import ClassNameSrc from './_examples/ClassName.jsx?raw'
import { Example }  from '@abw/badger-website'

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