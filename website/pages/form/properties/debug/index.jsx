import React          from 'react'
import Debug          from './_examples/Debug.jsx'
import DebugSrc       from './_examples/Debug.jsx?raw'
import Example        from '@/site/Example.jsx'
import SeeAlso        from '@/site/SeeAlso.jsx'
import TryItOut       from '@/site/TryItOut.jsx'
import Split          from '@/site/Split.jsx'
import { DebugLink }  from '@/site/Links.jsx'

const DebugExamples = () =>
  <>
    <h2 className="font-mono">debug</h2>
    <Split>
      <p>
        The <code>debug</code> property is your friend when it&apos;s 5pm on a
        Friday and you promised your boss/client that you would get the form
        changes made before you went home, but you can&apos;t figure out why
        it&apos;s not working.
      </p>
      <TryItOut>
        Open up the Javascript console and watch the pretty messages go
        flying by!
      </TryItOut>
    </Split>
    <Example
      Component={Debug}
      code={DebugSrc}
      caption="debug"
      expand
    />
    <SeeAlso
      links={[
        DebugLink
      ]}
    />
  </>


export default DebugExamples