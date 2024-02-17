import React              from 'react'
import Example            from '@/site/Example.jsx'
import TutorialPager      from '@/site/Pager/Tutorial.jsx'
import Split              from '@/site/Split.jsx'
import Suggest            from '@/site/Suggest.jsx'
import SubmitThrow        from './_examples/SubmitThrow.jsx'
import SubmitThrowSrc     from './_examples/SubmitThrow.jsx?raw'
import SubmitError        from './_examples/SubmitThrowError.jsx'
import SubmitErrorSrc     from './_examples/SubmitThrowError.jsx?raw'
import SubmitReject       from './_examples/SubmitReject.jsx'
import SubmitRejectSrc    from './_examples/SubmitReject.jsx?raw'
import OnError            from './_examples/OnError.jsx'
import OnErrorSrc         from './_examples/OnError.jsx?raw'
import { ErrorsLink, FormOnErrorLink } from '@/site/Links.jsx'

const SubmissionErrors = () =>
  <div className="prose">
    <h1>Submission Errors</h1>
    <p className="intro wide">
      For a good user experience we should use client-side validation to
      try and catch all data entry errors <i>before</i> they get submitted.
      However, it&apos;s not always possible to do that.  It may be the
      case that validating a field requires access to the database and is
      best handled on the server.  Or perhaps a field should be validated
      server-side for security reasons (e.g. validating a Captcha).  Or
      an API request could fail or otherwise be rejected for any number of
      other reasons.  So we must know how to handle these cases.
    </p>

    <h2>Simple Error</h2>
    <Split align="end">
      <p>
        If a submission throws an error or returns an error via a rejected
        Promise then the form submission handler will set the internal{' '}
        <code>error</code> state variable.
        See the <ErrorsLink/> component for
        more information about changing how and if errors are displayed.
      </p>
      <Suggest>
        Try submitting this form to see what happens when an error is thrown.
        You should see the error displayed in the form header and also in a
        debugging window beneath the form.
      </Suggest>
    </Split>
    <Example
      Component={SubmitThrow}
      code={SubmitThrowSrc}
      caption="Error Thrown"
    />
    <p>
      As well as calling the <code>throw()</code> function with a string,
      you can <code>throw</code> an <code>Error</code> object.
    </p>
    <Example
      Component={SubmitError}
      code={SubmitErrorSrc}
      caption="Error Thrown"
    />

    <h2>Rejected Promise</h2>
    <Split align="start">
      <div>
        <p>
          In most cases a failed submission should return a rejected Promise.
          The data returned should be an objecting containing either a single{' '}
          <code>error</code> string (or object containing a <code>message</code>),
          or an array of <code>errors</code>.  Each element in the array can be
          an error string, but the more usual (and useful) case is for each
          element to be an object containing the error <code>message</code>.
        </p>
        <p>
          The benefit of this approach is that error objects can also contain
          the <code>name</code> of the field that it relates to.  The
          corresponding field will be marked as invalid and have the error
          message set so that it can be displayed under the input.  Furthermore,
          the field label is copied into the error element so that it can be
          displayed in the error panel at the start of the form.
        </p>
      </div>
      <div>
        <p>
          This would be the typical way to handle a request that failed due to
          server-side validation errors.
        </p>
        <Suggest title="Try it out">
        Try submitting the form to see the errors generated.
        </Suggest>
      </div>
    </Split>
    <Example
      Component={SubmitReject}
      code={SubmitRejectSrc}
      caption="Error Thrown"
    />

    <h2><code>onError</code></h2>
    <Split>
      <p>
        You can provide an <FormOnErrorLink/> handler which will be called
        when an error response is received.  In this example we simply call
        a <code>setError()</code> function to store the error in a React state
        variable and then display it beneath the form.
      </p>
      <Suggest>
        Try submitting the form to see the errors generated.  The {' '}
        <FormOnErrorLink/> handler will store them in the state variable
        and display them beneath the form.
      </Suggest>
    </Split>
    <Example
      Component={OnError}
      code={OnErrorSrc}
      caption="onError"
    />

    <h2>Where Next?</h2>
    <p>
      We&apos;ve now enough in place to look at a more complete example.
    </p>

    <TutorialPager uri="submission-errors"/>
  </div>

export default SubmissionErrors