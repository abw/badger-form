import React        from 'react'
import ClassName    from './_examples/ClassName.jsx'
import ClassNameSrc from './_examples/ClassName.jsx?raw'
import { Example }  from '@abw/badger-website'

const ClassNameExamples = () =>
  <>
    <h2 className="font-mono">className</h2>
    <p>
      The <code>className</code> property can be used to add a custom
      CSS class.
    </p>
    <Example
      Component={ClassName}
      code={ClassNameSrc}
      caption="className"
      undent={2}
      expand
    />
  </>

export default ClassNameExamples