import React               from 'react'
import Children            from './_examples/Children.jsx'
import ChildrenSrc         from './_examples/Children.jsx?raw'
import UFExample           from './_examples/UFExample.jsx'
import UFExampleSrc        from './_examples/UFExample.jsx?raw'
import Example             from '@/site/Example.jsx'
import { FieldChildrenLink, FieldLink, FieldLayoutLink } from '@/site/Links.jsx'

const UseFieldExamples = () =>
  <>
    <h2 className="font-mono">UseField</h2>
    <p>
      The immediate <FieldChildrenLink/> of a <FieldLink/> component can
      be functions that will receive the field context as the first argument.
    </p>
    <Example
      Component={Children}
      code={ChildrenSrc}
      caption="Field Children"
      expand
    />

    <p>
      However, this only works for the immediate children of the <FieldLink/>.
      If you want to include a function that is nested inside another element
      (e.g. inside a <code>div</code> as shown in this example) then you can
      use the <code>UseForm</code> component to provide it.
    </p>
    <p>
      Don&apos;t forget that defining any children of a <FieldLink/> component
      will override the default <FieldLayoutLink/> component, so you&apos;ll need
      to add it manually or define your own layout for the field.
    </p>
    <Example
      Component={UFExample}
      code={UFExampleSrc}
      caption="UseField"
      expand
    />
  </>

export default UseFieldExamples