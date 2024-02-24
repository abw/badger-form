import React          from 'react'
import Submit         from './_examples/Submit.jsx'
import SubmitSrc      from './_examples/Submit.jsx?raw'
import Example        from '@/site/Example.jsx'
import { FormOnSubmitLink } from '@/site/Links.jsx'

const SubmitExamples = () =>
  <div className="prose flow">
    <h1>Submit</h1>
    <p className="intro wide">
      The <code>Submit</code> component can be used to add a button to
      submit the form. You can use the <FormOnSubmitLink/> form property to
      handle the submission.
    </p>
    <Example
      Component={Submit}
      code={SubmitSrc}
      caption="Submit"
      expand
    />
  </div>

/*
const SubmitExamples = () =>

    <h2><code>onSubmit</code></h2>
    <p>
      The default behaviour for the button is to submit the form.
      You can use the <FormOnSubmitLink/> form property to handle the
      submission.
    </p>
    <Example
      Element={OnSubmit} code={OnSubmitSrc}
      caption="onSubmit" expand
    />
  </div>
  */

export default SubmitExamples