import React          from 'react'
import Placeholder    from './_examples/Placeholder.jsx'
import PlaceholderSrc from './_examples/Placeholder.jsx?raw'
import { Example }    from '@abw/badger-website'

const TextAreaExamples = () =>
  <>
    <h2 className="font-mono">placeholder</h2>
    <p>
      The <code>placeholder</code> property can be used to add some placeholder
      text to the input.
    </p>
    <Example
      Component={Placeholder}
      code={PlaceholderSrc}
      caption="placeholder"
      undent={2}
      expand
    />
  </>

export default TextAreaExamples
