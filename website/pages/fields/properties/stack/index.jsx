import React      from 'react'
import Example    from '@/site/Example.jsx'
import Stack      from './_examples/FieldsStack.jsx'
import StackSrc   from './_examples/FieldsStack.jsx?raw'

const FieldsExamples = () =>
  <>
    <h2 className="font-mono">stack</h2>
    <p>
      The <code>stack</code> property can be used to define a stacking
      breakpoint.  This will add the corresponding <code>stack-XXX</code> CSS
      class.  Try resizing your browser window to see the effect.  With a
      width of less than 800px, the fields will be stacked, otherwise they
      will be displayed in three columns.
    </p>
    <Example
      Component={Stack}
      code={StackSrc}
      caption="stack"
    />
  </>

export default FieldsExamples