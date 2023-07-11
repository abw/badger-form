import React        from 'react'
import Example      from '../../site/Example.jsx'
import ValidateCode from '../../examples/field/Validate.jsx'
import ValidateSrc  from '../../examples/field/Validate.jsx?raw'
import FieldPager   from '../../site/Pager/FieldPager.jsx'

const Validate = () =>
  <div className="prose">
    <h1>Field</h1>
    <h2 className="font-mono">validate</h2>
    <p>
      Define a validation function.
    </p>
    <Example
      Component={ValidateCode}
      code={ValidateSrc}
      caption="Field Validation"
      expand
    />

    <FieldPager/>
  </div>

export default Validate