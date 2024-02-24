import React      from 'react'
import Example    from '@/site/Example.jsx'
import Grid       from './_examples/FieldsGrid.jsx'
import GridSrc    from './_examples/FieldsGrid.jsx?raw'
import Auto       from './_examples/FieldsGridAuto.jsx'
import AutoSrc    from './_examples/FieldsGridAuto.jsx?raw'

const FieldsExamples = () =>
  <div className="prose flow">
    <h1>Fields Properties</h1>
    <h2 className="font-mono">grid</h2>
    <p>
      The <code>grid</code> property can be used to layout the fields in
      a grid.  Set the property to the number of columns you want.  The
      default gap between the fields will be 1rem (using the{' '}
      <code>gap-h-4</code> utility class provided by{' '}
      <a href="https://abw.github.io/badger-css/utilities/grid">Badger-CSS</a>).
    </p>
    <Example
      Component={Grid}
      code={GridSrc}
      caption="grid"
    />
    <p>
      You can also specify <code>grid</code> as the boolean value{' '}
      <code>true</code> (which React will conveniently set for you if you
      include it as a valueless property) and it will automatically select
      the correct number of columns based on how many fields it is
      rendering.
    </p>
    <Example
      Component={Auto}
      code={AutoSrc}
      caption="grid"
    />
  </div>

export default FieldsExamples