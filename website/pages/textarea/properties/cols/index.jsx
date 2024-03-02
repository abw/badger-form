import React    from 'react'
import Cols     from './_examples/Cols.jsx'
import ColsSrc  from './_examples/Cols.jsx?raw'
import Example  from '@/site/Example.jsx'
import { TextAreaInputInlineLink } from '@/website/site/Links.jsx'

const TextAreaExamples = () =>
  <>
    <h2 className="font-mono">cols</h2>
    <p>
      The <code>cols</code> property can be used to set the number of columns.
      This will only have any effect when the <TextAreaInputInlineLink/> property
      is set.
    </p>
    <Example
      Component={Cols}
      code={ColsSrc}
      caption="cols"
      undent={2}
      expand
    />
  </>

export default TextAreaExamples
