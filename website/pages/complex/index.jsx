import React      from 'react'
import Complex    from './_examples/Complex.jsx'
import ComplexSrc from './_examples/Complex.jsx?raw'
import Example    from '@/site/Example.jsx'

const ComplexExamples = () =>
  <div className="prose flow">
    <h1>Complex</h1>
    <p className="intro wide">
      The <code>Complex</code> component is a work in progress.
    </p>
    <Example
      Component={Complex}
      code={ComplexSrc}
      caption="Changed"
      expand
    />
  </div>

export default ComplexExamples
