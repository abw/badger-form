import React       from 'react'
import Gap         from './_examples/Gap.jsx'
import GapSrc      from './_examples/Gap.jsx?raw'
import { Example } from '@abw/badger-website'

const GapExamples = () =>
  <>
    <h2 className="font-mono">gap</h2>
    <p>
      The default CSS class for the container uses flexbox and sets a gap of
      1rem between the buttons (<code>flex gap-h-4</code>).
      The <code>gap</code> property can be passed to change the gap (in units
      of 0.25rem) between the buttons.
    </p>
    <Example
      Component={Gap}
      code={GapSrc}
      caption="gap"
      undent={2}
      expand
    />
  </>

export default GapExamples