import React        from 'react'
import Example      from '../../site/Example.jsx'
import OnSubmitCode from '../../examples/tutorial/OnSubmit.jsx'
import OnSubmitSrc  from '../../examples/tutorial/OnSubmit.jsx?raw'
import ThrowCode    from '../../examples/form/submit/Throw.jsx'
import ThrowSrc     from '../../examples/form/submit/Throw.jsx?raw'
import RejectCode   from '../../examples/form/submit/Reject.jsx'
import RejectSrc    from '../../examples/form/submit/Reject.jsx?raw'
import FailCode     from '../../examples/form/submit/Fail.jsx'
import FailSrc      from '../../examples/form/submit/Fail.jsx?raw'
import TakenCode    from '../../examples/form/submit/Taken.jsx'
import TakenSrc     from '../../examples/form/submit/Taken.jsx?raw'
import ErrorsCode   from '../../examples/form/submit/Errors.jsx'
import ErrorsSrc    from '../../examples/form/submit/Errors.jsx?raw'
import FormPager    from '../../site/Pager/FormPager.jsx'

const OnSubmitPage = () =>
  <div className="prose">
    <h1>Form</h1>
    <h2 className="font-mono">onSubmit</h2>
    <p>
      The <code>onSubmit</code> property is perhaps the most important
      property to be aware of.
      You should use it to define a function which will be called when the
      form is submitted. The first argument passed to the function is an
      object containing the validated form values.
    </p>
    <Example
      Component={OnSubmitCode}
      code={OnSubmitSrc}
      caption="onSubmit"
      expand
    />

    <h3>Server Errors</h3>
    <p>
      In many cases the <code>onSubmit</code> handler will be an
      asynchronous function which makes an API call.  The server should
      implement server-side form validation and may need to return a
      response indicating problems with the submitted fields.
    </p>
    <p>
      If an <code>onSubmit</code> handler throws an error then it will be
      stored as <code>root.serverError.message</code> in the form state{' '}
      <code>errors</code>.
    </p>
    <p>
      The <code>Errors</code> component can be used to display such errors.
    </p>
    <Example
      Component={ThrowCode}
      code={ThrowSrc}
      caption="onSubmit Throw"
      expand
    />

    <p>
      An <code>onSubmit</code> handler can also return a rejected Promise.
      It should be an object containing an <code>error</code> property.
    </p>
    <Example
      Component={RejectCode}
      code={RejectSrc}
      caption="onSubmit Reject"
      expand
    />

    <p>
      The <code>onSubmit</code> handler is passed a second object containing{' '}
      <code>pass</code> and <code>fail</code> functions.  These are aliases
      for <code>resolve</code> and <code>reject</code> Promise functions.
      The handler can call the <code>fail</code> function to report an error.
    </p>
    <Example
      Component={FailCode}
      code={FailSrc}
      caption="onSubmit Fail"
      expand
    />

    <h3>Field Errors</h3>
    <p>
      The <code>onSubmit</code> handler can return an <code>errors</code> object,
      either by calling the <code>fail</code> function or as a rejected Promise.
      This can be an object in which the keys correspond to field names and
      the values are the error messages for the fields.
    </p>
    <Example
      Component={TakenCode}
      code={TakenSrc}
      caption="onSubmit Errors"
      expand
    />

    <p>
      Alternately, the <code>errors</code> returned can be an array of objects.
      Each object should have a <code>field</code>, <code>name</code> or{' '}
      <code>param</code> property to identify the field name, and either an{' '}
      <code>error</code> or <code>message</code> string to provide the error.
    </p>
    <Example
      Component={ErrorsCode}
      code={ErrorsSrc}
      caption="onSubmit Errors"
      expand
    />

    <FormPager/>
  </div>

export default OnSubmitPage