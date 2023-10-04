import React      from 'react'
import Example    from '../../site/Example.jsx'
import InputCode  from '../../examples/field/Input.jsx'
import InputSrc   from '../../examples/field/Input.jsx?raw'
import FieldPager from '../../site/Pager/FieldPager.jsx'

const FieldInput = () =>
  <div className="prose">
    <h1>Field</h1>
    <h2 className="font-mono">Input</h2>
    <p>
      The <code>Input</code> property can be used to provide an alternate
      component for rendering the field input.
    </p>
    <Example
      Component={InputCode}
      code={InputSrc}
      caption="Custom Input"
      expand
    />

    <FieldPager/>
  </div>

export default FieldInput
