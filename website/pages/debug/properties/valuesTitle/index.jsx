import React    from 'react'
import Example  from '@/site/Example.jsx'
import Title    from './_examples/Title.jsx'
import TitleSrc from './_examples/Title.jsx?raw'

const DebugExamples = () =>
  <div className="prose flow">
    <h1>Debug Properties</h1>
    <h2 className="font-mono">valuesTitle</h2>
    <p>
      You can use the <code>valuesTitle</code> property to change the title
      for the values table.
    </p>
    <Example
      Component={Title}
      code={TitleSrc}
      caption="title"
      expand
    />


  </div>

export default DebugExamples