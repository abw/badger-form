import React      from 'react'
import Example    from '@/site/Example.jsx'
import Fields     from './_examples/Fields.jsx'
import FieldsSrc  from './_examples/Fields.jsx?raw'
import Grid       from './_examples/Grid.jsx'
import GridSrc    from './_examples/Grid.jsx?raw'
import { FieldsLink } from '@/website/site/Links.jsx'

const FieldsExamples = () =>
  <div className="prose flow">
    <h1>Fieldset Properties</h1>
    <h2 className="font-mono">fields</h2>
    <p>
      The <code>fields</code> property can be used as
      a shortcut to render a set of named fields using the{' '}
      <FieldsLink/> component.
    </p>
    <Example
      Component={Fields}
      code={FieldsSrc}
      caption="Fieldset fields"
      expand
    />

    <h2>
      <span className="font-mono">grid</span>,{' '}
      <span className="font-mono">gap</span> and {' '}
      <span className="font-mono">stack</span>
    </h2>
    <p>
      Any other properties are forwarded onto the <FieldsLink/> component.
      For example, you can set the <code>grid</code>, <code>gap</code> and{' '}
      <code>stack</code> properties to set the layout to implement a grid
      layout.
    </p>
    <Example
      Component={Grid}
      code={GridSrc}
      caption="Fieldset Grid"
      expand
    />

  </div>

export default FieldsExamples