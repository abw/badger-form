import React        from 'react'
import Example      from '../../site/Example.jsx'
import OnSubmitCode from '../../examples/tutorial/OnSubmit.jsx'
import OnSubmitSrc  from '../../examples/tutorial/OnSubmit.jsx?raw'
import FormPager    from '../../site/Pager/FormPager.jsx'

const OnSubmitPage = () =>
  <div className="prose">
    <h1>Form</h1>
    <h2>onSubmit</h2>
    <p>
      The <code>onSubmit</code> property is perhaps the most important
      property to be aware of.
      You should use it to define a handler for when the form is submitted.
    </p>
    <Example
      Component={OnSubmitCode}
      code={OnSubmitSrc}
      caption="onSubmit"
      expand
    />

    <FormPager/>
  </div>

export default OnSubmitPage