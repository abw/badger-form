import React          from 'react'
import InputClass     from './_examples/InputClass.jsx'
import InputClassSrc  from './_examples/InputClass.jsx?raw'
import Example        from '@/site/Example.jsx'

const CheckboxExample = () =>
  <div className="prose flow">
    <h1>Checkbox Input Properties</h1>
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
  </div>

export default CheckboxExample
