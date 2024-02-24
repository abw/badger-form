import React      from 'react'
import Example    from '@/site/Example.jsx'
import Text     from './_examples/Text.jsx'
import TextSrc  from './_examples/Text.jsx?raw'

const SubmitExamples = () =>
  <div className="prose flow">
    <h1>Submit Properties</h1>
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


  </div>

export default SubmitExamples