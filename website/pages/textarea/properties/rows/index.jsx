import React    from 'react'
import Rows     from './_examples/Rows.jsx'
import RowsSrc  from './_examples/Rows.jsx?raw'
import Example  from '@/site/Example.jsx'

const TextAreaExamples = () =>
  <>
    <h2 className="font-mono">rows</h2>
    <p>
      The <code>rows</code> property can be used to set the number of rows.
    </p>
    <Example
      Component={Rows}
      code={RowsSrc}
      caption="rows"
      undent={2}
      expand
    />
  </>

export default TextAreaExamples
