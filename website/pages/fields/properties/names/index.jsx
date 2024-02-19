import React      from 'react'
import Example    from '@/site/Example.jsx'
import FieldsSrc  from './_examples/Fields.jsx?raw'
import String     from './_examples/String.jsx'
import StringSrc  from './_examples/String.jsx?raw'
import Array      from './_examples/Array.jsx'
import ArraySrc   from './_examples/Array.jsx?raw'
import CodeBlock, { prepareCode } from '@/website/site/CodeBlock.jsx'
import { FormFieldsLink, FormLink } from '@/website/site/Links.jsx'

const FieldsExamples = () =>
  <div className="prose flow">
    <h1>Fields Properties</h1>
    <h2 className="font-mono">names</h2>
    <p>
      The <code className="code">names</code> property should be used to
      specify the list of field names.  This can be a string of whitespace
      delimited field names that should be defined in the <FormLink/> <FormFieldsLink/>.
    </p>
    <Example
      Component={String}
      code={StringSrc}
      caption="Fields"
      expand
    />
    <p>
      The <code>names</code> can also be an array of field names.
    </p>
    <Example
      Component={Array}
      code={ArraySrc}
      caption="Fields"
      expand
    />
    <p>
      In the above examples the <code>fields</code> are defined in a
      separate <code>Fields.jsx</code> module, shown below.
    </p>
    <CodeBlock
      code={prepareCode(FieldsSrc)}
      caption="Fields.jsx"
    />


  </div>

export default FieldsExamples