import React          from 'react'
import Submit         from './_examples/Submit.jsx'
import SubmitSrc      from './_examples/Submit.jsx?raw'
import { Example }    from '@abw/badger-website'
import { SubmitLink } from '@/website/site/Links.jsx'

const SubmitExamples = () =>
  <>
    <h2 className="font-mono">submit</h2>
    <p>
      The <code>submit</code> property can be used to pass properties to
      the <SubmitLink/> component.
    </p>
    <Example
      Component={Submit}
      code={SubmitSrc}
      caption="submit"
      undent={2}
      expand
    />
  </>

export default SubmitExamples