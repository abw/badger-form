import React        from 'react'
import OnSuccess    from './_examples/OnSuccess.jsx'
import OnSuccessSrc from './_examples/OnSuccess.jsx?raw'
import Example      from '@/site/Example.jsx'
import SeeAlso      from '@/site/SeeAlso.jsx'
import { FormOnErrorLink, FormOnSubmitLink } from '@/site/Links.jsx'

const OnSuccessExamples = () =>
  <div className="prose flow">
    <h1>Form Events</h1>
    <h2 className="font-mono">onSuccess</h2>
    <p>
      The <code>onSuccess</code> property can be used to define a function
      that will be called in the event of a successful submission of the
      form.
    </p>
    <Example
      Component={OnSuccess}
      code={OnSuccessSrc}
      caption="onSuccess"
    />
    <SeeAlso
      links={[
        FormOnSubmitLink,
        FormOnErrorLink
      ]}
    />
  </div>


export default OnSuccessExamples