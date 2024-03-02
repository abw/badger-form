import React      from 'react'
import DefaultSrc from './_examples/Default.jsx?raw'
import Default    from './_examples/Default.jsx'
import Example    from '@/site/Example.jsx'

const DefaultExamples = () =>
  <>
    <h2 className="font-mono">default</h2>
    <p>
      The <code>default</code> property can be used to define a default
      value for a field.
    </p>
    <Example
      Component={Default}
      code={DefaultSrc}
      caption="default"
    />
  </>


export default DefaultExamples