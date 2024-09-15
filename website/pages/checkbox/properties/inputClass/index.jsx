import React          from 'react'
import InputClass     from './_examples/InputClass.jsx'
import InputClassSrc  from './_examples/InputClass.jsx?raw'
import { Example }    from '@abw/badger-website'

const CheckboxExample = () =>
  <>
    <h2 className="font-mono">inputClass</h2>
    <p>
      The <code>inputClass</code> property can be used to add a CSS class
      to the checkbox input.
    </p>
    <Example
      Component={InputClass}
      code={InputClassSrc}
      caption="inputClass"
      undent={2}
      expand
    />
  </>

export default CheckboxExample
