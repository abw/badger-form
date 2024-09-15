import React       from 'react'
import Title       from './_examples/Title.jsx'
import TitleSrc    from './_examples/Title.jsx?raw'
import { Example } from '@abw/badger-website'

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