import React      from 'react'
import Example    from '@/site/Example.jsx'
import OnClick    from './_examples/OnClick.jsx'
import OnClickSrc from './_examples/OnClick.jsx?raw'

const OnClickExamples = () =>
  <>
    <h2 className="font-mono">onClick</h2>
    <p>
      You can use the <code>onClick</code> property to handle a click on
      the button.
    </p>
    <Example
      Component={OnClick}
      code={OnClickSrc}
      caption="onClick"
      undent={2}
      expand
    />
  </>

export default OnClickExamples