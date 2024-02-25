import React          from 'react'
import Options        from './_examples/Options.jsx'
import OptionsSrc     from './_examples/Options.jsx?raw'
import Simple         from './_examples/Simple.jsx'
import SimpleSrc      from './_examples/Simple.jsx?raw'
import Example        from '@/site/Example.jsx'

const SelectExample = () =>
  <div className="prose flow">
    <h1>Select Input Properties</h1>
    <h2 className="font-mono">options</h2>
    <p>
      Use the <code>options</code> property to define the options for the
      select input.  It should be an array of objects that contain{' '}
      <code>value</code> (used to set the field value) and <code>text</code>{' '}
      (used as the text label) properties.
    </p>
    <Example
      Component={Options}
      code={OptionsSrc}
      caption="options"
      undent={2}
      expand
    />
    <p>
      In simple cases where the value and text are the same, you can define
      the <code>options</code> as an array of strings.
    </p>
    <Example
      Component={Simple}
      code={SimpleSrc}
      caption="options"
      undent={2}
      expand
    />
  </div>

export default SelectExample
