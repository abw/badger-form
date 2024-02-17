import React              from 'react'
import Example            from '@/site/Example.jsx'
import TutorialPager      from '@/site/Pager/Tutorial.jsx'
import Split              from '@/site/Split.jsx'
import Suggest            from '@/site/Suggest.jsx'
import SubmitResponse     from './_examples/SubmitResponse.jsx'
import SubmitResponseSrc  from './_examples/SubmitResponse.jsx?raw'
import { FormOnSubmitLink, FormOnSuccessLink } from '@/site/Links.jsx'

const SubmissionResponse = () =>
  <div className="prose">
    <h1>Submission Response</h1>
    <p className="intro wide">
      We now need to think about what happens in the real world where a form
      submission results in a call to a back-end API.  There are, broadly
      speaking, two possible outcomes: the call is successful, or it fails
      for some reason.
    </p>

    <h2><code>onSuccess</code></h2>
    <Split align="end">
      <div>
        <p>
          Let&apos;s start by looking at the case there the submission is
          successful.  In this example we define an <FormOnSubmitLink/> function
          which returns a resolved promise.  This is emulating how both{' '}
          <a href="https://axios-http.com/">Axios</a> and the native{' '}
          <a href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API">Fetch API</a>{' '}
          API work.
        </p>
        <p>
          The additional step is to defined an <FormOnSuccessLink/> handler
          which can do something to handle the successful response.  In this
          case we&apos;re calling the <code>setResponse</code> function to store
          the response data, much like in the previous example, except that this
          time we&apos;re emulating the full request and response cycle.
        </p>
      </div>
      <Suggest>
        Try entering some values in the form below and click on the
        &quot;Login&quot; button.  You should see the values returned by
        an emulated server response appear in a debugging window beneath the
        form.  Also note that the form is reset on a successful submission.
      </Suggest>
    </Split>
    <Example
      Component={SubmitResponse}
      code={SubmitResponseSrc}
      caption="Submission Response"
    />

    <h2>Where Next?</h2>
    <p>
      What happens if the submission isn&apos;t successful?  We&apos;ll look
      at handling submission errors on the next page.
    </p>

    <TutorialPager uri="submission-response"/>
  </div>

export default SubmissionResponse