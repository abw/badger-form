import React        from 'react'
import Example      from '@/site/Example.jsx'
import ClassName    from './_examples/ClassName.jsx'
import ClassNameSrc from './_examples/ClassName.jsx?raw'
import FieldsetCSS  from './_examples/fieldset.css?raw'
import CodeBlock    from '@/site/CodeBlock.jsx'

const FieldsetExamples = () =>
  <div className="prose flow">
    <h1>Fieldset Properties</h1>
    <h2 className="font-mono">className</h2>
    <p>
      The <code>className</code> property can be used to add a CSS class to
      the fieldset container.
    </p>
    <Example
      Component={ClassName}
      code={ClassNameSrc}
      caption="Fieldset className"
      expand
    />
    <h2>Additional Styles</h2>
    <p>
      For completeness, here&apos;s the additional CSS we&apos;re using to
      apply the styling in the above example.
    </p>
    <CodeBlock
      code={FieldsetCSS}
      caption="fieldset.scss"
      language="css"
      expand
    />
  </div>

export default FieldsetExamples