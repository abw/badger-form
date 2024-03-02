import React      from 'react'
import Prompt      from './_examples/Prompt.jsx'
import PromptSrc   from './_examples/Prompt.jsx?raw'
import NoPrompt    from './_examples/NoPrompt.jsx'
import NoPromptSrc from './_examples/NoPrompt.jsx?raw'
import PromptFn    from './_examples/PromptFn.jsx'
import PromptFnSrc from './_examples/PromptFn.jsx?raw'
import Example    from '@/site/Example.jsx'
import Split      from '@/site/Split.jsx'
import TryItOut from '@/website/site/TryItOut.jsx'
import { ErrorsFieldErrorsLink } from '@/website/site/Links.jsx'

const ErrorsExamples = () =>
  <>
    <h2 className="font-mono">prompt</h2>
    <Split>
      <p>
        The <code>prompt</code> property can be used to set the prompt
        displayed before any field errors.  You must have the{' '}
        <ErrorsFieldErrorsLink/> property set for this to have any effect.
      </p>
      <TryItOut>
        Try leaving one or both fields empty to generate validation error(s).
      </TryItOut>
    </Split>
    <Example
      Component={Prompt}
      code={PromptSrc}
      caption="prompt"
      undent={2}
      expand
    />
    <p>
      You can set the <code>prompt</code> to false if you don&apos;t want it
      displayed.
    </p>
    <Example
      Component={NoPrompt}
      code={NoPromptSrc}
      caption="no prompt"
      undent={2}
      expand
    />
    <p>
      The <code>prompt</code> property can also be a function.  It will be
      passed the number of error message so that it can generate an
      appropriate title.
    </p>
    <Example
      Component={PromptFn}
      code={PromptFnSrc}
      caption="prompt function"
      undent={2}
      expand
    />
  </>

export default ErrorsExamples
