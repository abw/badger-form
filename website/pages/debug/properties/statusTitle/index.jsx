import React       from 'react'
import Title       from './_examples/Title.jsx'
import TitleSrc    from './_examples/Title.jsx?raw'
import { Example } from '@abw/badger-website'

const DebugExamples = () =>
  <>
    <h2 className="font-mono">statusTitle</h2>
    <p>
      You can use the <code>statusTitle</code> property to change the title
      for the status table.
    </p>
    <Example
      Component={Title}
      code={TitleSrc}
      caption="statusTitle"
      undent={2}
      expand
    />
  </>

export default DebugExamples