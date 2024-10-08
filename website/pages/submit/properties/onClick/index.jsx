import React      from 'react'
import OnClick    from './_examples/OnClick.jsx'
import OnClickSrc from './_examples/OnClick.jsx?raw'
import { Example } from '@abw/badger-website'

const OnClickExamples = () =>
  <>
    <h2 className="font-mono">onClick</h2>
    <p>
      You can use the <code>onClick</code> property to handle a click on
      the button.  You will need to call <code>preventDefault()</code> on the
      event if you want to stop the form from being submitted.
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