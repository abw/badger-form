import React         from 'react'
import Label         from './_examples/Label.jsx'
import LabelSrc      from './_examples/Label.jsx?raw'
import Example       from '@/site/Example.jsx'
import { FieldLink } from '@/site/Links.jsx'

const LabelExamples = () =>
  <div className="prose flow">
    <h1>Field Components</h1>
    <h2 className="font-mono">Label</h2>
    <p>
      The <code>Label</code> component can be used to add a label to a{' '}
      <FieldLink/>. It&apos;s usually added automatically, but it&apos;s
      useful if you&apos;re implementing your own layout for a field.
    </p>
    <Example
      Component={Label}
      code={LabelSrc}
      caption="Label"
      expand
    >
    </Example>
  </div>

export default LabelExamples