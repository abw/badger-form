import React          from 'react'
import Inline         from './_examples/Inline.jsx'
import InlineSrc      from './_examples/Inline.jsx?raw'
import Example        from '@/site/Example.jsx'
import { TextInputSizeLink } from '@/website/site/Links.jsx'

const TextExamples = () =>
  <>
    <h2 className="font-mono">inline</h2>
    <p>
      The default behaviour is to make the text fields extend to the
      full width of the container.  Bitter experience has taught me that
      it&apos;s generally easier to do this and constrain the width of
      the container than it is to try and get all inputs the same width,
      especially if you&apos;re using prefix and suffix elements.
    </p>
    <p>
      You can set the <code>inline</code> property on a field if you want
      the input to have fluid width.  The <TextInputSizeLink/> can be used
      to set the input size.
    </p>
    <Example
      Component={Inline}
      code={InlineSrc}
      caption="inline"
      undent={2}
      expand
    />
  </>

export default TextExamples
