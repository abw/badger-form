import React                from 'react'
import ResetSubmit          from './_examples/ResetSubmit.jsx'
import ResetSubmitSrc       from './_examples/ResetSubmit.jsx?raw'
import Example              from '@/site/Example.jsx'
import ResetSubmitPager     from '@/site/Pager/ResetSubmitPager.jsx'
import { ResetLink, SubmitLink } from '@/site/Links.jsx'

const ResetSubmitExamples = () =>
  <div className="prose flow">
    <h1>ResetSubmit</h1>
    <p className="intro wide">
      Renders a <ResetLink/> button and a <SubmitLink/> button.
    </p>
    <Example
      Component={ResetSubmit}
      code={ResetSubmitSrc}
      caption="ResetSubmit"
      expand
    />
    <ResetSubmitPager/>
  </div>

export default ResetSubmitExamples