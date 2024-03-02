import React      from 'react'
import Example    from '@/site/Example.jsx'
import Text     from './_examples/Text.jsx'
import TextSrc  from './_examples/Text.jsx?raw'

const ResetExamples = () =>
  <>
    <h2 className="font-mono">text</h2>
    <p>
      You can use the <code>text</code> property to change the text that&apos;s
      displayed on the button.
    </p>
    <Example
      Component={Text}
      code={TextSrc}
      caption="text"
      undent={2}
      expand
    />
  </>

export default ResetExamples