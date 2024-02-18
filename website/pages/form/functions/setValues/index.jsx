import React            from 'react'
import SetValuesSrc     from './_examples/SetValues.jsx?raw'
import SetValues        from './_examples/SetValues.jsx'
import UseSetValuesSrc  from './_examples/UseSetValues.jsx?raw'
import UseSetValues     from './_examples/UseSetValues.jsx'
import UseSetValuesESrc from './_examples/UseSetValuesE.jsx?raw'
import UseSetValuesE    from './_examples/UseSetValuesE.jsx'
import Example          from '@/site/Example.jsx'
import Split            from '@/site/Split.jsx'
import TryItOut         from '@/site/TryItOut.jsx'

const SetExamples = () =>
  <div className="prose flow">
    <h1>Form Functions</h1>
    <h2 className="font-mono">setValues()</h2>
    <Split>
      <p>
        The <code>setValues</code> function can be used to programmatically
        set form values.  You can use the <code>onLoad</code> handler to
        save a reference to the form context as show in this example.
      </p>
      <TryItOut>
        Click on one of the buttons to update the form values.
      </TryItOut>
    </Split>
    <Example
      Component={SetValues}
      code={SetValuesSrc}
      caption="setValues"
    />

    <h2 className="font-mono">useForm</h2>
    <p>
      If you want to set the values from a component placed inside the{' '}
      <code>Form</code> component then you can use <code>useForm()</code> to
      get access to the form context.
    </p>
    <Example
      Component={UseSetValues}
      code={UseSetValuesSrc}
      caption="setValues"
    />

    <h2>Preventing Default Event</h2>
    <p>
      If you&apos;re using a <code>button</code> to trigger the call to{' '}
      <code>setValues()</code>, as shown in the example above, then you need
      to make sure you call <code>e.preventDefault()</code> event.  Otherwise
      the form may be submitted. Alternately you can pass the event as the
      second argument to the <code>setValues()</code> method as shown below
      and it will do it for you.
    </p>
    <Example
      Component={UseSetValuesE}
      code={UseSetValuesESrc}
      caption="setValues"
    />
  </div>

export default SetExamples