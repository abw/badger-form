import React              from 'react'
import Example            from '@/site/Example.jsx'
import TutorialPager      from '@/site/Pager/Tutorial.jsx'
import Split              from '@/site/Split.jsx'
import Suggest            from '@/site/Suggest.jsx'
import Debugging          from './_examples/Debugging.jsx'
import DebuggingSrc       from './_examples/Debugging.jsx?raw'
import { DebugLink, FormDebugLink, FieldLink, FieldsLink, FormLink } from '@/site/Links.jsx'

const DebuggingExample = () =>
  <div className="prose">
    <h1>Debugging</h1>
    <p className="intro wide">
      Let&apos;t face it, things don&apos;t always work right first time,
      so being able to debug your forms is an important requirement.
    </p>

    <h2><DebugLink/> Component and <FormDebugLink/> Property</h2>
    <Split align="end">
      <div>
        <p>
          The <DebugLink/> component can be added to a form to display information
          about the form values and other state variables.  By default it shows
          only the form values, but you can use the <code>status</code> option to
          also show the form status.  If for some reason you don&apos;t want to
          see the values you can set <code>values</code> to <code>false</code>.
        </p>
        <p>
          If you add the <FormDebugLink/> property to a <FormLink/> or{' '}
          <FieldLink/> then it will enable debugging messages for that component.
          These will be output to the Javascript console.  Any properties (like{' '}
          <code>debug</code>) that are passed to the <FieldsLink/> component will
          be forwarded onto the respective <FieldLink/> components, so it works
          there too.
        </p>
      </div>
      <Suggest>
        Try changing some of the values in the form.  Watch the form values
        and status change in the debugging panel.  Also check out the
        Javascript console for further debugging messages.
      </Suggest>
    </Split>
    <Example
      Component={Debugging}
      code={DebuggingSrc}
      caption="Debugging"
    >
    </Example>

    <h2>Where Next?</h2>
    <p>
      On the next page we&apos;ll look at how you can define your own field
      layout.
    </p>

    <TutorialPager uri="debugging"/>
  </div>

export default DebuggingExample