import React          from 'react'
import Input          from './_examples/Input.jsx'
import InputSrc       from './_examples/Input.jsx?raw'
import Example        from '@/site/Example.jsx'
import { FieldLink, FieldTypeLink } from '@/site/Links.jsx'

const TextExamples = () =>
  <div className="prose flow">
    <h1>Input Types</h1>
    <h2 className="font-mono">checkbox</h2>
    <p>
      Set the <FieldLink/> <FieldTypeLink/> to <code>checkbox</code> for a checkbox.
      Use the <code>text</code> property to define any text that you want to
      appear alongside the checkbox.  The <code>label</code> is optional on all
      fields, so depending on what your checkbox text says, you might want to
      leave it out.
    </p>
    <Example
      Component={Input}
      code={InputSrc}
      caption="checkbox"
      expand
    />
  </div>

export default TextExamples
