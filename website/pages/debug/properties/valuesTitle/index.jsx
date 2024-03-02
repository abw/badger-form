import React    from 'react'
import Example  from '@/site/Example.jsx'
import Title    from './_examples/Title.jsx'
import TitleSrc from './_examples/Title.jsx?raw'

const DebugExamples = () =>
  <>
    <h2 className="font-mono">valuesTitle</h2>
    <p>
      You can use the <code>valuesTitle</code> property to change the title
      for the values table.
    </p>
    <Example
      Component={Title}
      code={TitleSrc}
      caption="valuesTitle"
      undent={2}
      expand
    />
  </>

export default DebugExamples