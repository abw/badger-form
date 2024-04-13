import React    from 'react'
import Example  from '@/site/Example.jsx'
import Size     from './_examples/Size.jsx'
import SizeSrc  from './_examples/Size.jsx?raw'

const ResetSubmitExamples = () =>
  <>
    <h2 className="font-mono">size</h2>
    <p>
      The <code>size</code> property can be added to set the overall size
      of the buttons.
    </p>
    <Example
      Component={Size}
      code={SizeSrc}
      caption="space"
      undent={2}
      expand
    />
  </>

export default ResetSubmitExamples