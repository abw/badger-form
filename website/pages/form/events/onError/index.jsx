import React      from 'react'
import OnError    from './_examples/OnError.jsx'
import OnErrorSrc from './_examples/OnError.jsx?raw'
import Example    from '@/site/Example.jsx'
import SeeAlso    from '@/site/SeeAlso.jsx'
import { FormOnSubmitLink, FormOnSuccessLink } from '@/site/Links.jsx'

const OnErrorExamples = () =>
  <>
    <h2 className="font-mono">onError</h2>
    <p>
      The <code>onError</code> property can be used to define a function
      that will be called in the event of a failed submission of the
      form.
    </p>
    <Example
      Component={OnError}
      code={OnErrorSrc}
      caption="onError"
    />
    <SeeAlso
      links={[
        FormOnSubmitLink,
        FormOnSuccessLink
      ]}
    />
  </>


export default OnErrorExamples