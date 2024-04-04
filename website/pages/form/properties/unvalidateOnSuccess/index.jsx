import React          from 'react'
import Unvalidate     from './_examples/UnvalidateOnSuccess.jsx'
import UnvalidateSrc  from './_examples/UnvalidateOnSuccess.jsx?raw'
import Example        from '@/site/Example.jsx'
import SeeAlso        from '@/site/SeeAlso.jsx'
import { FormResetOnSuccessLink, FormUnvalidateLink } from '@/site/Links.jsx'

const UnvalidateOnSuccessExamples = () =>
  <>
    <h2 className="font-mono">unvalidateOnSuccess</h2>
    <p>
      The <code>unvalidateOnSuccess</code> property can be set to automatically
      clear any validation state on the form.
    </p>
    <Example
      Component={Unvalidate}
      code={UnvalidateSrc}
      caption="unvalidateOnSuccess" expand
    />
    <SeeAlso
      links={[
        FormUnvalidateLink,
        FormResetOnSuccessLink
      ]}
    />
  </>


export default UnvalidateOnSuccessExamples