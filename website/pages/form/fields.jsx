import React          from 'react'
import Example        from '../../site/Example.jsx'
import FormFieldsCode from '../../examples/tutorial/FormFields.jsx'
import FormFieldsSrc  from '../../examples/tutorial/FormFields.jsx?raw'
import FormPager      from '../../site/Pager/FormPager.jsx'
import { FieldLink } from '../../site/Links.jsx'

const FormFields = () =>
  <div className="prose">
    <h1>Form</h1>
    <h2>fields</h2>
    <p>
      The <code>fields</code> property can be used to define default
      properties for fields.
    </p>
    <p>
      When a <FieldLink/> appears in the form, the <code>name</code> of
      the field will be used to fetch the corresponding entry from this object.
      These will then be provided as the default properties.
      You can augment or override these values with properties explicitly set
      on the <FieldLink/> component.
    </p>
    <Example
      Component={FormFieldsCode}
      code={FormFieldsSrc}
      caption="fields"
      expand
    />

    <FormPager/>
  </div>

export default FormFields