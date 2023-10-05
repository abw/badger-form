import React          from 'react'
import Example        from '../../site/Example.jsx'
import FormValuesCode from '../../examples/tutorial/FormValues.jsx'
import FormValuesSrc  from '../../examples/tutorial/FormValues.jsx?raw'
import FormPager      from '../../site/Pager/FormPager.jsx'
import { FieldLink } from '../../site/Links.jsx'
import Split from '../../site/Split.jsx'

const FormValues = () =>
  <div className="prose">
    <h1>Form</h1>
    <h2>values</h2>
    <Split>
      <div>
        <p>
          The <code>values</code> property can be used to define initial values
          for form fields.
        </p>
        <p>
          The keys in this object will be matched against the
          <code>name</code> property of each <FieldLink/> to provide the
          default value.
        </p>
      </div>
      <div className="warning alert border shadow-2">
        <h3>IMPORTANT</h3>
        Note that there is an annoying limitation in React Hook Form
        relating to default values.  If you provide a <code>values</code> object
        to the form then it <b>MUST</b> contain default values for all fields.
      </div>
    </Split>

    <Example
      Component={FormValuesCode}
      code={FormValuesSrc}
      caption="values"
      expand
    />

    <FormPager/>
  </div>

export default FormValues