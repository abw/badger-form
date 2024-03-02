import React          from 'react'
import Example        from '@/site/Example.jsx'
import TutorialPager  from '@/site/Pager/Tutorial.jsx'
import Split          from '@/site/Split.jsx'
import Suggest        from '@/site/Suggest.jsx'
import DummySubmit    from './_examples/DummySubmit.jsx'
import DummySubmitSrc from './_examples/DummySubmit.jsx?raw'
import { FormLink, FormOnSubmitLink } from '@/site/Links.jsx'

const FormSubmission = () =>
  <div className="prose flow">
    <h1>Form Submission</h1>
    <p className="intro wide">
      To handle submission of a form we need to add an <FormOnSubmitLink/>{' '}
      handler to the <FormLink/> component.
      In most cases this will be
      making a call to a back-end API but to demonstrate the basic principle
      let&apos;s start with something simpler.
    </p>
    <h2><FormOnSubmitLink/></h2>
    <Split align="end">
      <p>
        We&apos;ll create a function which stores the submitted{' '}
        <code>values</code> in a state variable and displays them on the
        screen.  The <FormOnSubmitLink/> handler is passed an object
        containing the validated form values.  It should return a Promise which
        resolves on success.  If an error occurs then the Promise should reject,
        returning an object containing either an <code>error</code> and/or an
        array of <code>errors</code>.  These are handled the same as for
        client-side form validation.
      </p>
      <Suggest>
        Try entering some values in the form below and click on the
        &quot;Login&quot; button.  You should see the submitted values
        appear in a debugging window beneath the form.
      </Suggest>
    </Split>
    <Example
      Component={DummySubmit}
      code={DummySubmitSrc}
      caption="Dummy Submission"
    />
    <h2>Where Next?</h2>
    <p>
      When the form is submitted there are two possible outcomes.  Either
      the submission is successful, or there&apos;s an error (or errors)
      that need to be handled.  We&apos;ll look at these in the next few
      pages.
    </p>

    <TutorialPager uri="form-submission"/>
  </div>

export default FormSubmission