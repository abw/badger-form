import React         from 'react'
import Example       from '@/site/Example.jsx'
import ClassName     from './_examples/ClassName.jsx'
import ClassNameSrc  from './_examples/ClassName.jsx?raw'

const FieldsExamples = () =>
  <>
    <h2 className="font-mono">className</h2>
    <p>
      The <code>className</code> property can be set to add a CSS class to
      the fields container.
    </p>
    <Example
      Component={ClassName}
      code={ClassNameSrc}
      caption="className"
    />
  </>

export default FieldsExamples