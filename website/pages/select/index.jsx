import React          from 'react'
import Input          from './_examples/Input.jsx'
import InputSrc       from './_examples/Input.jsx?raw'
import Example        from '@/site/Example.jsx'
import { FieldLink, FieldTypeLink } from '@/site/Links.jsx'

const SelectExamples = () =>
  <div className="prose flow">
    <h1>Input Types</h1>
    <h2 className="font-mono">select</h2>
    <p>
      Set the <FieldLink/> <FieldTypeLink/> to <code>select</code> for a
      drop-down select list.
    </p>
    <Example
      Component={Input}
      code={InputSrc}
      caption="select"
      expand
    />
  </div>

export default SelectExamples
