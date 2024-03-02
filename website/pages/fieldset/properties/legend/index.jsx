import React      from 'react'
import Example    from '@/site/Example.jsx'
import Legend     from './_examples/Legend.jsx'
import LegendSrc  from './_examples/Legend.jsx?raw'

const FieldsetExamples = () =>
  <>
    <h2 className="font-mono">legend</h2>
    <p>
      The <code>legend</code> property can be used to add a legend to
      the fieldset container.
    </p>
    <Example
      Component={Legend}
      code={LegendSrc}
      caption="legend"
      undent={2}
      expand
    />
  </>

export default FieldsetExamples