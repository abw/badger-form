import React     from 'react'
import Border    from './_examples/Border.jsx'
import BorderSrc from './_examples/Border.jsx?raw'
import Example   from '@/site/Example.jsx'

const CheckboxExample = () =>
  <>
    <h2 className="font-mono">border</h2>
    <p>
      You can set the <code>border</code> property to add a border around
      the checkbox field.
    </p>
    <Example
      Component={Border}
      code={BorderSrc}
      caption="border"
      undent={2}
      expand
    />
  </>

export default CheckboxExample
