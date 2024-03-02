import React        from 'react'
import OnReset      from './_examples/OnReset.jsx'
import OnResetSrc   from './_examples/OnReset.jsx?raw'
import Example      from '@/site/Example.jsx'
import SeeAlso      from '@/site/SeeAlso.jsx'
import { FormOnErrorLink, FormOnSubmitLink, FormOnSuccessLink } from '@/site/Links.jsx'

const OnResetExamples = () =>
  <>
    <h2 className="font-mono">onReset</h2>
    <p>
      The <code>onReset</code> property can be used to define a function
      that will be called when the form is reset.
    </p>
    <Example
      Component={OnReset}
      code={OnResetSrc}
      caption="onReset"
    />
    <SeeAlso
      links={[
        FormOnSubmitLink,
        FormOnSuccessLink,
        FormOnErrorLink
      ]}
    />
  </>


export default OnResetExamples