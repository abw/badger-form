import React      from 'react'
import Fields     from './_examples/Fields.jsx'
import FieldsSrc  from './_examples/Fields.jsx?raw'
import Inline     from './_examples/Inline.jsx'
import InlineSrc  from './_examples/Inline.jsx?raw'
import Example    from '@/site/Example.jsx'
import { FieldLink, FieldNameLink } from '@/site/Links.jsx'

const FieldsExamples = () =>
  <>
    <h2 className="font-mono">fields</h2>
    <p>
      The <code>fields</code> property allows you to define properties
      for form fields externally.  The <FieldLink/> <FieldNameLink/> property
      is used to associate a field to its definition.
    </p>
    <Example
      Component={Fields}
      code={FieldsSrc}
      caption="fields"
    />
    <p>
      This is the same as defining the properties on the <FieldLink/> components.
    </p>
    <Example
      Component={Inline}
      code={InlineSrc}
      caption="fields"
    />
    <p>
      The <code>fields</code> definition can contain any number of fields,
      including those that aren&apos;t used by any particular form.  Only
      the fields that are referenced by a <FieldLink/> component will be
      considered part of the form.
    </p>
    <p>
      Although it requires a little more work to define fields externally, there
      are a number of benefits.  The first is that you&apos;re separating the
      field definition from the presentational markup.  When a form gets
      more complex it&apos;s usually easier to have them separated,
      particularly if you have more complicated validation functions attached
      to the fields.
    </p>
    <p>
      Another benefit is that you can share field definitions
      across multiple forms.  For example, you might want to define a single
      set of field definitions for all forms relating to user authentication:
      login, registration, password reset, and so on.  The <code>email</code>{' '}
      field will be the same for each, so it makes sense to define it in one
      place.
    </p>
  </>


export default FieldsExamples