import React        from 'react'
import ClassName    from './_examples/ClassName.jsx'
import ClassNameSrc from './_examples/ClassName.jsx?raw'
import { Example, Split }  from '@abw/badger-website'
import { CancelGapLink, CancelSpaceLink } from '@/site/Links.jsx'

const ClassNameExamples = () =>
  <>
    <h2 className="font-mono">className</h2>
    <Split>
      <p>
        The <code>className</code> property can be set to define your own
        CSS class for the container.  When this is defined the <CancelGapLink/>{' '}
        and <CancelSpaceLink/> properties have no effect.
      </p>
    </Split>

    <Example
      Component={ClassName}
      code={ClassNameSrc}
      caption="className"
      undent={2}
      expand
    />
  </>

export default ClassNameExamples