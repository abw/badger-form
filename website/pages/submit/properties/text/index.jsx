import React    from 'react'
import Text     from './_examples/Text.jsx'
import TextSrc  from './_examples/Text.jsx?raw'
import { Example } from '@abw/badger-website'

const SubmitExamples = () =>
  <>
    <h2 className="font-mono">text</h2>
    <p>
      You can use the <code>text</code> property to change the text that&apos;s
      displayed on the button and add a custom CSS class using <code>className</code>.
    </p>
    <Example
      Component={Text}
      code={TextSrc}
      caption="text"
      undent={2}
      expand
    />
  </>

export default SubmitExamples