import React          from 'react'
import Input          from './_examples/Input.jsx'
import InputSrc       from './_examples/Input.jsx?raw'
import Example        from '@/site/Example.jsx'
import { FieldLink, FieldTypeLink } from '@/site/Links.jsx'

const TextExamples = () =>
  <div className="prose flow">
    <h1>Input Types</h1>
    <h2 className="font-mono">text</h2>
    <p className="intro wide">
      The <code>text</code> input is the default <FieldTypeLink/> for
      a <FieldLink/>.  You can specify it explicitly if you like, but
      it&apos;s entirely optional.
    </p>
    <Example
      Component={Input}
      code={InputSrc}
      caption="text"
      undent={2}
      expand
    />
  </div>

export default TextExamples
