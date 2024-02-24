import React        from 'react'
import OnSubmit     from './_examples/OnSubmit.jsx'
import OnSubmitSrc  from './_examples/OnSubmit.jsx?raw'
import Throw        from './_examples/Throw.jsx'
import ThrowSrc     from './_examples/Throw.jsx?raw'
import Reject       from './_examples/Reject.jsx'
import RejectSrc    from './_examples/Reject.jsx?raw'
import Taken        from './_examples/Taken.jsx'
import TakenSrc     from './_examples/Taken.jsx?raw'
import Errors       from './_examples/Errors.jsx'
import ErrorsSrc    from './_examples/Errors.jsx?raw'
import Example      from '@/site/Example.jsx'
import SeeAlso      from '@/site/SeeAlso.jsx'
import Split        from '@/site/Split.jsx'
import { ErrorsFieldErrorsLink, ErrorsLink, FormOnErrorLink, FormOnSuccessLink } from '@/site/Links.jsx'
import TryItOut from '@/website/site/TryItOut.jsx'

const OnSubmitExamples = () =>
  <div className="prose flow">
    <h1>Form Events</h1>
    <h2 className="font-mono">onSubmit</h2>
    <Split>
      <p>
        The <code>onSubmit</code> property can be used to define a function
        that will be called when the form is submitted and has passed all the
        relevant validation checks.
      </p>
      <p>
        In most cases this function will be making an API call to submit the
        form data.  The form values are passed to the function as the first
        argument.  The second argument is an object containing the form
        context in case you need it.
      </p>
    </Split>
    <Example
      Component={OnSubmit}
      code={OnSubmitSrc}
      caption="onSubmit"
    />

    <h2>Server Error</h2>
    <Split align="end">
      <div>
        <p>
          In many cases the <code>onSubmit</code> handler will be an
          asynchronous function which makes an API call.  The server should
          implement server-side form validation and may need to return a
          response indicating problems with the submitted fields.
        </p>
        <p>
          If an <code>onSubmit</code> handler throws an error then it will be
          stored as the <code>error</code> property in the form state{' '}.
          The <ErrorsLink/> component can be used to display errors.
        </p>
      </div>
      <TryItOut>
        Try submitting the form.  The <code>onSubmit</code> handler throws
        an error which will be displayed by the <ErrorsLink/> component.
      </TryItOut>
    </Split>
    <Example
      Component={Throw}
      code={ThrowSrc}
      caption="onSubmit Throw"
      expand
    />

    <p>
      An <code>onSubmit</code> handler can also return a rejected Promise.
      It should be an object containing an <code>error</code> property.
    </p>
    <Example
      Component={Reject}
      code={RejectSrc}
      caption="onSubmit Reject"
      expand
    />

    <h2>Field Errors</h2>
    <p>
      The <code>onSubmit</code> handler can return an <code>errors</code> object
      as a rejected Promise. This can be an object in which the keys correspond
      to field names and the values are the error messages for the fields.
    </p>
    <p>
      The error messages will be set and displayed in the appropriate fields.
      You can also use the <ErrorsLink/> component with the{' '}
      <ErrorsFieldErrorsLink/> property to display them.
    </p>
    <Example
      Component={Taken}
      code={TakenSrc}
      caption="onSubmit errors"
      expand
    />

    <p>
      Alternately, the <code>errors</code> returned can be an array of objects.
      Each object should have a <code>name</code>, <code>field</code> or{' '}
      <code>param</code> property to identify the field name, and either an{' '}
      <code>message</code> or <code>error</code> string to provide the error.
    </p>
    <Example
      Component={Errors}
      code={ErrorsSrc}
      caption="onSubmit errors"
      expand
    />

    <SeeAlso
      links={[
        FormOnSuccessLink,
        FormOnErrorLink
      ]}
    />
  </div>


export default OnSubmitExamples