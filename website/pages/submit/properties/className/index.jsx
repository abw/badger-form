import React        from 'react'
import Example      from '@/site/Example.jsx'
import ClassName    from './_examples/ClassName.jsx'
import ClassNameSrc from './_examples/ClassName.jsx?raw'

const ClassNameExamples = () =>
  <div className="prose flow">
    <h1>Submit Properties</h1>
    <h2 className="font-mono">className</h2>
    <p>
      The <code>className</code> property can be used to add a custom
      CSS class.
    </p>
    <Example
      Component={ClassName}
      code={ClassNameSrc}
      caption="className"
      expand
    />
  </div>

export default ClassNameExamples