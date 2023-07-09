import React          from 'react'
import Example        from '../../site/Example.jsx'
import FormValuesCode from '../../examples/tutorial/FormValues.jsx'
import FormValuesSrc  from '../../examples/tutorial/FormValues.jsx?raw'
import FormPager      from '../../site/Pager/FormPager.jsx'
import { FieldLink } from '../../site/Links.jsx'

const FormValues = () =>
  <div className="prose">
    <h1>Form</h1>
    <h2>values</h2>
    <p>
      The <code>values</code> property can be used to define initial values
      for form fields.
    </p>
    <p>
      The keys in this object will be matched against the
      <code>name</code> property of each <FieldLink/> to provide the
      default value.
    </p>
    <Example
      Component={FormValuesCode}
      code={FormValuesSrc}
      caption="values"
      expand
    />

    <FormPager/>
  </div>

export default FormValues