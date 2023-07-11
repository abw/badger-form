import React        from 'react'
import Example      from '../../site/Example.jsx'
import ValidateCode from '../../examples/field/ValidateOnChange.jsx'
import ValidateSrc  from '../../examples/field/ValidateOnChange.jsx?raw'
import FieldPager   from '../../site/Pager/FieldPager.jsx'

const ValidateOnChange = () =>
  <div className="prose">
    <h1>Field</h1>
    <h2 className="font-mono">validateOnChange</h2>
    <p>
      Define a validation function that will be applied whenever the field
      value changes.
    </p>
    <Example
      Component={ValidateCode}
      code={ValidateSrc}
      caption="validateOnChange"
      expand
    />

    <FieldPager/>
  </div>

export default ValidateOnChange