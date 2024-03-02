import React         from 'react'
import ClassNameSrc  from './_examples/ClassName.jsx?raw'
import ClassName     from './_examples/ClassName.jsx'
import Example       from '@/site/Example.jsx'

const ClassNameExamples = () =>
  <>
    <h2 className="font-mono">className</h2>
    <p>
      The <code>className</code> property can be used to add a CSS class to
      the input container.
    </p>
    <Example
      Component={ClassName}
      code={ClassNameSrc}
      caption="className"
      expand
    />
  </>


export default ClassNameExamples