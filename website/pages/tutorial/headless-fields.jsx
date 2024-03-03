import React                    from 'react'
import Example                  from '@/site/Example.jsx'
import TutorialPager            from '@/site/Pager/Tutorial.jsx'
import HeadlessFields           from './_examples/HeadlessFields.jsx'
import HeadlessFieldsSrc        from './_examples/HeadlessFields.jsx?raw'
import HeadlessBlank            from './_examples/HeadlessBlank.jsx'
import HeadlessBlankSrc         from './_examples/HeadlessBlank.jsx?raw'
import HeadlessBuiltins         from './_examples/HeadlessBuiltins.jsx'
import HeadlessBuiltinsSrc      from './_examples/HeadlessBuiltins.jsx?raw'
import HeadlessBuiltinsBare     from './_examples/HeadlessBuiltinsBare.jsx'
import HeadlessBuiltinsBareSrc  from './_examples/HeadlessBuiltinsBare.jsx?raw'
import { FieldLink, FieldLayoutLink, FieldMessageLink, TextInputLink, FieldLabelComponentLink } from '@/site/Links.jsx'

const HeadlessFieldsExample = () =>
  <div className="prose flow">
    <h1>Headless Fields</h1>
    <p className="intro wide">
      One of the problems with any UI library is that it forces you into
      using the styles provided, or requires you to customise the CSS to
      match your in-house brand.  This is the problem that &quot;Headless&quot;
      UI components are designed to solve.
    </p>

    <h2>Field Render Function</h2>
    <p>
      Instead of using the default rendering components for a field you can
      provide a function as a child element.  The function will be passed
      the field context and can render the field any way it likes.
    </p>
    <Example
      Component={HeadlessBlank}
      code={HeadlessBlankSrc}
      caption="Headless Fields"
    />

    <h2>Typical Render Function</h2>
    <p>
      Here&apos;s a more complete example showing how a field would typically
      be rendered using the builtin components.
    </p>
    <Example
      Component={HeadlessFields}
      code={HeadlessFieldsSrc}
      caption="Headless Fields"
    />

    <h2>Builtin Components</h2>
    <p>
      You can mix and match your own layout with the builtin components.
      This example shows how you can use the <FieldLayoutLink/>, <FieldLabelComponentLink/>,{' '}
      <TextInputLink/> and <FieldMessageLink/> components to build up the field content.
    </p>
    <Example
      Component={HeadlessBuiltins}
      code={HeadlessBuiltinsSrc}
      caption="Builtin Components"
    />

    <h2>Child Components</h2>
    <p>
      If you&apos;re using the default layout components and/or providing
      your own that can access the field context using <code>useField</code>{' '}
      then you don&apos;t need to define a function for the <FieldLink/> body.
      You can just include them as children of the field component.
    </p>
    <Example
      Component={HeadlessBuiltinsBare}
      code={HeadlessBuiltinsBareSrc}
      caption="Builtin Components"
    />

    <TutorialPager uri="headless-fields"/>
  </div>

export default HeadlessFieldsExample