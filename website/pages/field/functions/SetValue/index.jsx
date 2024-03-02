import React            from 'react'
import SetValueSrc      from './_examples/SetValue.jsx?raw'
import SetValue         from './_examples/SetValue.jsx'
import SetValueEventSrc from './_examples/SetValueEvent.jsx?raw'
import SetValueEvent    from './_examples/SetValueEvent.jsx'
import Example          from '@/site/Example.jsx'
import SeeAlso          from '@/site/SeeAlso.jsx'
import Split            from '@/site/Split.jsx'
import TryItOut         from '@/site/TryItOut.jsx'
import {
  FieldResetLink, FormLink, FormSetValuesLink, FieldOnLoadLink
} from '@/site/Links.jsx'

const SetValueExamples = () =>
  <>
    <h2 className="font-mono">setValue()</h2>
    <Split>
      <p>
        The <code>setValue()</code> method can be called on a field to
        set the value.  You can use <FieldOnLoadLink/> to capture a reference
        to the field context object
      </p>
      <TryItOut>
        Click on one of the buttons to set the field to have the corresponding
        value.
      </TryItOut>
    </Split>
    <Example
      Component={SetValue}
      code={SetValueSrc}
      caption="setValue()"
    />

    <h2>Beware Buttons That Submit!</h2>
    <Split>
      <div>
        <p>
          One thing to be aware of is that the default behaviour of a{' '}
          <code>button</code> inside a <code>form</code> is to submit the form.
          This is an innate property of HTML and not something that&apos;s specific
          to this library.  In the example above we put the buttons outside the{' '}
          <FormLink/> to avoid this behaviour, but it&apos;s not always possible
          to do that. There are a number of ways to work around it, shown in the
          example below.
        </p>
        <p>
          The first &quot;Antelope&quot; button calls the{' '}
          <code>preventDefault()</code>{' '} method on the event.  Given that
          this is a bit clumsy, the <code>setValue()</code> method allows you to
          pass the event as the second argument and it will call{' '}
          <code>preventDefault()</code> for you, as shown on the
          second &quot;Badger&quot; button.
        </p>
      </div>
      <div>
        <p>
          The third approach, shown on the &quot;Camel&quot; button, is to
          explicitly set the <code>type</code> to <code>button</code> to
          override the default button <code>type</code> of <code>submit</code>.{' '}
          The fourth &quot;Danger!&quot; button doesn&apos;t do anything and
          will cause the form to submit, just in case you don&apos;t believe
          me that it&apos;s really a problem.
        </p>
        <TryItOut>
          Click on one of the buttons to set the input value.  Be warned
          that the fourth button will cause the form to submit.
        </TryItOut>
      </div>
    </Split>
    <Example
      Component={SetValueEvent}
      code={SetValueEventSrc}
      caption="setValue()"
    />

    <p>
      You can also set values for one or more fields by name using the{' '}
      <FormLink/> <FormSetValuesLink/> method.
    </p>
    <SeeAlso
      links={[
        FormSetValuesLink,
        FieldResetLink
      ]}
    />
  </>


export default SetValueExamples