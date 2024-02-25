import React    from 'react'
import Size     from './_examples/Size.jsx'
import SizeSrc  from './_examples/Size.jsx?raw'
import Example  from '@/site/Example.jsx'
import { FieldClassNameLink, FieldPrefixLink, FieldSuffixLink, TextInputInlineLink } from '@/website/site/Links.jsx'

const TextExamples = () =>
  <div className="prose flow">
    <h1>Text Input Properties</h1>
    <h2 className="font-mono">size</h2>
    <p>
      The <code>size</code> property can be used to set the size (in
      characters) of a text input.  This will only take effect when
      the <TextInputInlineLink/> property is set.  The default value
      is 20.
    </p>
    <p>
      Note that this controls the size of the input field.  If you have
      a <FieldPrefixLink/> or <FieldSuffixLink/> defined for the field
      then they will increase the overall width of the field.  If you want
      to control the overall width of the field then you can do so using
      the <FieldClassNameLink/> property.
    </p>
    <Example
      Component={Size}
      code={SizeSrc}
      caption="inline"
      undent={2}
      expand
    />
  </div>

export default TextExamples
