import React         from 'react'
import LabelSrc      from './_examples/Label.jsx?raw'
import Label         from './_examples/Label.jsx'
import FormFieldsSrc from './_examples/FormFields.jsx?raw'
import FormFields    from './_examples/FormFields.jsx'
import Example       from '@/site/Example.jsx'
import SeeAlso       from '@/site/SeeAlso.jsx'
import Split         from '@/site/Split.jsx'
import Suggest       from '@/site/Suggest.jsx'
import { FieldLink, FieldNameLink, FormFieldsLink, FormLink } from '@/site/Links.jsx'

const LabelExamples = () =>
  <>
    <h2 className="font-mono">label</h2>
    <p>
      Add a label to the field with the <code>label</code> property.
    </p>
    <Example
      Component={Label}
      code={LabelSrc}
      caption="name"
      expand
    />
    <Split>
      <p>
        Like all other field properties, they can be defined via <FormFieldsLink/>{' '}
        on the <FormLink/>.  If you explicitly set a <code>label</code> on the{' '}
        <FieldLink/> then it will take precedence.
      </p>
      <Suggest>
        Note how the first field has the <code>label</code> defined in the{' '}
        <FormFieldsLink/> but the second defines its own <code>label</code>{' '}
        which is used instead of the one defined in the <FormFieldsLink/>.
      </Suggest>
    </Split>

    <Example
      Component={FormFields}
      code={FormFieldsSrc}
      caption="Form fields"
      expand
    />
    <SeeAlso
      links={[
        FieldNameLink,
        FormFieldsLink
      ]}
    />
  </>


export default LabelExamples