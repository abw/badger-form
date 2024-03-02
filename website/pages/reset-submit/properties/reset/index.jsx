import React      from 'react'
import Example    from '@/site/Example.jsx'
import Reset      from './_examples/Reset.jsx'
import ResetSrc   from './_examples/Reset.jsx?raw'
import { ResetLink } from '@/site/Links.jsx'

const ResetSubmitExamples = () =>
  <>
    <h2 className="font-mono">reset</h2>
    <p>
      The <code>reset</code> property can be used to pass properties to
      the <ResetLink/> component.
    </p>
    <Example
      Component={Reset}
      code={ResetSrc}
      caption="reset"
      undent={2}
      expand
    />
  </>

export default ResetSubmitExamples