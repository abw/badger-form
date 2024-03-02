import React    from 'react'
import Example  from '@/site/Example.jsx'
import Title    from './_examples/Title.jsx'
import TitleSrc from './_examples/Title.jsx?raw'

const DebugExamples = () =>
  <>
    <h2 className="font-mono">title</h2>
    <p>
      You can use the <code>title</code> property to set the title.
    </p>
    <Example
      Component={Title}
      code={TitleSrc}
      caption="title"
      undent={2}
      expand
    />
  </>

export default DebugExamples