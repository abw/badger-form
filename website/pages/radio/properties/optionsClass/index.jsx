import React            from 'react'
import OptionsClass     from './_examples/OptionsClass.jsx'
import OptionsClassSrc  from './_examples/OptionsClass.jsx?raw'
import Example          from '@/site/Example.jsx'

const RadioExample = () =>
  <div className="prose flow">
    <h1>Radio Input Properties</h1>
    <h2 className="font-mono">optionsClass</h2>
    <p>
      The <code>optionsClass</code> property can be used to add a CSS class
      to each option.
    </p>
    <Example
      Component={OptionsClass}
      code={OptionsClassSrc}
      caption="optionsClass"
      undent={2}
      expand
    />
  </div>

export default RadioExample
