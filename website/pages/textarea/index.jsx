import React          from 'react'
import Input          from './_examples/Input.jsx'
import InputSrc       from './_examples/Input.jsx?raw'
import Example        from '@/site/Example.jsx'
import TextAreaPager  from '@/site/Pager/TextareaPager.jsx'
import { FieldLink, FieldTypeLink } from '@/site/Links.jsx'

const TextExamples = () =>
  <div className="prose flow">
    <h1>Input Types</h1>
    <h2 className="font-mono">textarea</h2>
    <p className="intro wide">
      Set the <FieldLink/> <FieldTypeLink/> to <code>textarea</code> for
      a text area input.
    </p>
    <Example
      Component={Input}
      code={InputSrc}
      caption="textarea"
      undent={2}
      expand
    />
    <TextAreaPager/>
  </div>

export default TextExamples
