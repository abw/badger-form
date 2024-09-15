import React          from 'react'
import OptionClass    from './_examples/OptionClass.jsx'
import OptionClassSrc from './_examples/OptionClass.jsx?raw'
import { Example }    from '@abw/badger-website'

const RadioExample = () =>
  <>
    <h2 className="font-mono">optionClass</h2>
    <p>
      The <code>optionClass</code> property can be used to add a CSS class
      to each option.
    </p>
    <Example
      Component={OptionClass}
      code={OptionClassSrc}
      caption="optionClass"
      undent={2}
      expand
    />
  </>

export default RadioExample
