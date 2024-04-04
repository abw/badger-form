import React          from 'react'
import Unvalidate     from './_examples/Unvalidate.jsx'
import UnvalidateSrc  from './_examples/Unvalidate.jsx?raw'
import Example        from '@/site/Example.jsx'
import SeeAlso        from '@/site/SeeAlso.jsx'
import { FormResetLink, FormUnvalidateOnSuccessLink } from '@/site/Links.jsx'

const UnvalidateExamples = () =>
  <>
    <h2 className="font-mono">unvalidate</h2>
    <p>
      The <code>unvalidate</code> function can be called to reset any
      validation state.
    </p>
    <Example
      Component={Unvalidate}
      code={UnvalidateSrc}
      caption="unvalidate" expand
    />
    <SeeAlso
      links={[
        FormUnvalidateOnSuccessLink,
        FormResetLink
      ]}
    />
  </>


export default UnvalidateExamples