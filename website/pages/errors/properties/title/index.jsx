import React      from 'react'
import Title      from './_examples/Title.jsx'
import TitleSrc   from './_examples/Title.jsx?raw'
import NoTitle    from './_examples/NoTitle.jsx'
import NoTitleSrc from './_examples/NoTitle.jsx?raw'
import TitleFn    from './_examples/TitleFn.jsx'
import TitleFnSrc from './_examples/TitleFn.jsx?raw'
import Example    from '@/site/Example.jsx'
import Split      from '@/site/Split.jsx'
import TryItOut from '@/website/site/TryItOut.jsx'

const ErrorsExamples = () =>
  <>
    <h2 className="font-mono">title</h2>
    <p>
      The <code>title</code> property can be used to set the title
      for the component.
    </p>
    <Example
      Component={Title}
      code={TitleSrc}
      caption="title"
      undent={2}
      expand
    />
    <p>
      You can set the <code>title</code> to false if you don&apos;t want it.
    </p>
    <Example
      Component={NoTitle}
      code={NoTitleSrc}
      caption="no title"
      undent={2}
      expand
    />
    <Split>
      <p>
        The <code>title</code> property can also be a function.  It will be
        passed the number of error message so that it can generate an
        appropriate title.
      </p>
      <TryItOut>
        Try entering vowels in the fields below.  The title bar for the
        errors component will depending on there being one or more errors.
      </TryItOut>
    </Split>
    <Example
      Component={TitleFn}
      code={TitleFnSrc}
      caption="title function"
      expand
    />
  </>

export default ErrorsExamples
