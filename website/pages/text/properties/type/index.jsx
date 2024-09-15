import React    from 'react'
import Type     from './_examples/Type.jsx'
import TypeSrc  from './_examples/Type.jsx?raw'
import { Example } from '@abw/badger-website'
import { FieldTypeLink } from '@/website/site/Links.jsx'

const TextExamples = () =>
  <>
    <h2 className="font-mono">type</h2>
    <p>
      The <FieldTypeLink/> property can also be set to one of the other
      input types that are based on the text input: <code>number</code>,{' '}
      <code>date</code>, <code>password</code>, <code>color</code> and so on.
    </p>
    <Example
      Component={Type}
      code={TypeSrc}
      caption="type"
      undent={2}
      expand
    />
  </>

export default TextExamples
