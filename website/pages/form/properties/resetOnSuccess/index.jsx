import React      from 'react'
import Reset      from './_examples/ResetOnSuccess.jsx'
import ResetSrc   from './_examples/ResetOnSuccess.jsx?raw'
import Example    from '@/site/Example.jsx'
import SeeAlso    from '@/site/SeeAlso.jsx'
import { FormResetLink, FormUnvalidateOnSuccessLink } from '@/site/Links.jsx'

const ResetOnSuccessExamples = () =>
  <>
    <h2 className="font-mono">resetOnSuccess</h2>
    <p>
      The <code>resetOnSuccess</code> property can be set to automatically
      reset the form on successful submission.
    </p>

    <Example
      Component={Reset}
      code={ResetSrc}
      caption="resetOnSuccess" expand
    />
    <SeeAlso
      links={[
        FormResetLink,
        FormUnvalidateOnSuccessLink
      ]}
    />
  </>


export default ResetOnSuccessExamples