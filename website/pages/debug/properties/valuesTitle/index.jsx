import React       from 'react'
import Title       from './_examples/Title.jsx'
import TitleSrc    from './_examples/Title.jsx?raw'
import { Example } from '@abw/badger-website'

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