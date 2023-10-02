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
    <div className="alert warning border">
      <h3>NOTE</h3>
      <div>
        The default validation supported by React Hook Form is very limited.
        A validation function should only return <code>true</code> or{' '}
        <code>false</code>.  This seems like a huge limitation to me.  For
        example, it prevents you from using Yup, Joi or any other validation
        library that throws errors (RHF does support it, but you have to use
        an adaptor). I&apos;ve written some wrapper code which allows you to
        return <code>true</code>, <code>false</code>, throw an error, or
        return a resolved or rejected promise.  I just haven&apos;t got
        around to documenting it yet.
      </div>
    </div>
    <Example
      Component={ValidateCode}
      code={ValidateSrc}
      caption="Field Validation"
      expand
    />

    <FieldPager/>
  </div>

export default Validate