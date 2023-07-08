import React from 'react'
import Example       from '../../site/Example.jsx'
import OnSubmitCode from '../../examples/tutorial/OnSubmit.jsx'
import OnSubmitSrc  from '../../examples/tutorial/OnSubmit.jsx?raw'
import FormValuesCode from '../../examples/tutorial/FormValues.jsx'
import FormValuesSrc  from '../../examples/tutorial/FormValues.jsx?raw'
import FormFieldsCode from '../../examples/tutorial/FormFields.jsx'
import FormFieldsSrc  from '../../examples/tutorial/FormFields.jsx?raw'
import Pager from '../../site/Pager/index.jsx'
import { Tutorial } from '../../site/Menus.jsx'

const FormProperties = () =>
  <div className="prose">
    <h1>Form Properties</h1>
    <p>
    </p>

    <h2>onSubmit</h2>
    <p>
      The <code>onSubmit</code> property is perhaps the most important.
      You should use it to define a handler for when the form is submitted.
    </p>
    <Example
      Component={OnSubmitCode}
      code={OnSubmitSrc}
      caption="onSubmit"
      expand
    />

    <h2>values</h2>
    <p>
      The <code>values</code> property can be used to define initial values
      for fields, indexed by the field <code>name</code>.
    </p>
    <Example
      Component={FormValuesCode}
      code={FormValuesSrc}
      caption="values"
      expand
    />

    <h2>fields</h2>
    <p>
      The <code>fields</code> property can be used to define properties for
      fields, indexed by the field <code>name</code>.  You can augment or
      override these values by providing properties to the
      relevant <code>Field</code> component.
    </p>
    <Example
      Component={FormFieldsCode}
      code={FormFieldsSrc}
      caption="fields"
      expand
    />

    <Pager menu={Tutorial}/>
  </div>

export default FormProperties