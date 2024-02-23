import React      from 'react'
import Example    from '@/site/Example.jsx'
import Values     from './_examples/Values.jsx'
import ValuesSrc  from './_examples/Values.jsx?raw'

const DebugExamples = () =>
  <div className="prose flow">
    <h1>Debug Properties</h1>
    <h2 className="font-mono">values</h2>
    <p>
      The default behaviour is to show the form values.  If you don&apos;t
      want to display the values (e.g. if you&apos;re only interested in the
      form status) then you can set <code>values</code> to be false.
    </p>
    <Example
      Component={Values}
      code={ValuesSrc}
      caption="values"
      expand
    />


  </div>

export default DebugExamples