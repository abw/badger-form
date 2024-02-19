import React      from 'react'
import Example    from '@/site/Example.jsx'
import Gap        from './_examples/FieldsGap.jsx'
import GapSrc     from './_examples/FieldsGap.jsx?raw'

const FieldsExamples = () =>
  <div className="prose flow">
    <h1>Fields Properties</h1>
    <h2 className="font-mono">gap</h2>
    <p>
      The <code>gap</code> property can be used to set a custom horizontal
      gap between fields.  The value should be an integer number of margin
      units of 0.25rem.
    </p>
    <Example
      Component={Gap}
      code={GapSrc}
      caption="Fields With a Gap"
    />
  </div>

export default FieldsExamples