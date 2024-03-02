import React         from 'react'
import NameSrc       from './_examples/Name.jsx?raw'
import Name          from './_examples/Name.jsx'
import FormFieldsSrc from './_examples/FormFields.jsx?raw'
import FormFields    from './_examples/FormFields.jsx'
import Example       from '@/site/Example.jsx'
import SeeAlso       from '@/site/SeeAlso.jsx'
import Split         from '@/site/Split.jsx'
import Suggest       from '@/site/Suggest.jsx'
import TryItOut      from '@/site/TryItOut.jsx'
import {
  DebugLink, FieldLabelLink, FieldLink, FormFieldsLink, FormLink,
  FieldRequiredLink
} from '@/site/Links.jsx'

const NameExamples = () =>
  <>
    <h2 className="font-mono">name</h2>
    <Split>
      <p>
        The <code>name</code> is the only required property for a <FieldLink/>.
        It is used as the key to set the <FormLink/> value.
      </p>
      <TryItOut>
        Enter some text in the input field.  The <DebugLink/> component is
        included in this example to show the form data as it&apos;s being
        set.  Click on the &quot;Submit&quot; button and you&apos;ll see
        an alert showing the data that would be submitted.
      </TryItOut>
    </Split>
    <Example
      Component={Name}
      code={NameSrc}
      caption="name"
      expand
    />

    <Split>
      <p>
        You can set the <FormFieldsLink/> property on the <FormLink/> as an
        object containing additional properties for each field.  The{' '}
        <code>name</code> is used as the key to fetch those properties.
        Any properties explicitly set on the <FieldLink/> will override them.
      </p>
      <Suggest>
        Note how the <FieldLink/> has now got a <FieldLabelLink/> and the{' '}
        <FieldRequiredLink/> property is set.
      </Suggest>
    </Split>
    <Example
      Component={FormFields}
      code={FormFieldsSrc}
      caption="Form fields" expand
    />
    <SeeAlso
      links={[
        FieldLabelLink,
        FormFieldsLink
      ]}
    />
  </>


export default NameExamples