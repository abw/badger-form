import React                from 'react'
import Example              from '@/site/Example.jsx'
import ResetSubmit          from './_examples/ResetSubmit.jsx'
import ResetSubmitSrc       from './_examples/ResetSubmit.jsx?raw'
import { ResetLink, SubmitLink } from '@/site/Links.jsx'

const ResetSubmitExamples = () =>
  <div className="prose flow">
    <h1>Controls</h1>
    <h2 className="font-mono">ResetSubmit</h2>
    <p>
      Renders a <ResetLink/> button and a <SubmitLink/> button.
    </p>
    <Example
      Component={ResetSubmit}
      code={ResetSubmitSrc}
      caption="ResetSubmit"
      expand
    />
  </div>

export default ResetSubmitExamples