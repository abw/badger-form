import React              from 'react'
import Example            from '../../site/Example.jsx'
import EmptyFormCode      from '../../examples/form/EmptyForm.jsx'
import EmptyFormSrc       from '../../examples/form/EmptyForm.jsx?raw'
import FormWithFieldsCode from '../../examples/form/FormWithFields.jsx'
import FormWithFieldsSrc  from '../../examples/form/FormWithFields.jsx?raw'
import FormFunctionCode   from '../../examples/form/FormFunction.jsx'
import FormFunctionSrc    from '../../examples/form/FormFunction.jsx?raw'
import FormUseFormCode    from '../../examples/form/FormUseForm.jsx'
import FormUseFormSrc     from '../../examples/form/FormUseForm.jsx?raw'
import FormPager          from '../../site/Pager/FormPager.jsx'
import Link               from '../../site/Link.jsx'

const FormIndex = () =>
  <div className="prose">
    <h1>Form</h1>
    <p>
      The <code>Form</code> component is used to create a form.  Any
      valid content can appear between the opening and closing tags.
    </p>

    <Example
      Component={EmptyFormCode}
      code={EmptyFormSrc}
      caption="Empty form"
      expand
    />

    <p>
      There will usually be some <Link to="/field" text={<code>Field</code>}/>{' '}
      components inside the form.
    </p>
    <Example
      Component={FormWithFieldsCode}
      code={FormWithFieldsSrc}
      caption="Form with fields"
      expand
    />
    <p>
      An immediate child of the <code>Form</code> component can be a function.
      It will be passed an object containing the form context as an argument.
    </p>
    <Example
      Component={FormFunctionCode}
      code={FormFunctionSrc}
      caption="Form function"
      expand
    />

    <p>
      If a function isn&apos;t an immediate child of the <code>Form</code>{' '}
      component then you can use the <Link to="/useform" text="UseForm"/> component
      to get access to the form context.  This can be nested at any depth below
      the <code>Form</code> component.
    </p>
    <Example
      Component={FormUseFormCode}
      code={FormUseFormSrc}
      caption="UseForm Component"
      expand
    />

    <FormPager/>
  </div>

export default FormIndex