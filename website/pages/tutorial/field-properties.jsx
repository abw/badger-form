import React from 'react'
import Example       from '../../site/Example.jsx'
import FieldNameCode from '../../examples/tutorial/FieldName.jsx'
import FieldNameSrc  from '../../examples/tutorial/FieldName.jsx?raw'
// import FieldTypeCode from '../../examples/tutorial/FieldType.jsx'
// import FieldTypeSrc  from '../../examples/tutorial/FieldType.jsx?raw'
// import FieldLabelCode from '../../examples/tutorial/FieldLabel.jsx'
// import FieldLabelSrc  from '../../examples/tutorial/FieldLabel.jsx?raw'
import Pager from '../../site/Pager/index.jsx'
import { Tutorial } from '../../site/Menus.jsx'
import Link from '../../site/Link.jsx'
import Split from '../../site/Split.jsx'

const FieldProperties = () =>
  <div className="prose">
    <h1>Field Properties</h1>
    <p>
      All of the basic HTML input properties are supported and can be
      set on a <code>Field</code> component.  This example demonstrates
      some of the more common ones.
    </p>

    <Split align="start">
      <div>
        <h2>name</h2>
        <p>
          The only mandatory field property is <code>name</code>.
          This should be unique within a form.
        </p>
        <p>
          If you have defined any{' '}
          <code>fields</code> on the <code>Form</code> component then the{' '}
          <code>name</code> will be used to match properties defined in the
          corresponding entry.  Any properties defined on the{' '}
          <code>Field</code> component will take precedence over them.
        </p>
        <p>
          Similarly if you have any <code>values</code> defined for the{' '}
          <code>Form</code> then the <code>name</code> will be used as the
          index to fetch the default value.
        </p>
        <p>
          When the form is submitted the <code>onSubmit</code> handler will
          receive an object containing the form values, each indexed by the
          field&apos;s <code>name</code> property.
        </p>
        <h2>type</h2>
        <p>
          Used to set the input type.  See{' '}
          <Link to="/tutorial/field-types" text="Field Types"/>.
        </p>
      </div>
      <div>
        <h2>label</h2>
        <p>
          Used to add a label to the field.
        </p>
        <h2>help</h2>
        <p>
          Additional help for a field, displayed underneath the input.
        </p>
        <h2>size</h2>
        <p>
          The size of a text input in characters.
        </p>
        <h2>required</h2>
        <p>
          Used to indicate that the field is required.
        </p>
      </div>
    </Split>
    <Example
      Component={FieldNameCode}
      code={FieldNameSrc}
      caption="Field Name"
      expand
    />

    <Pager menu={Tutorial}/>
  </div>

export default FieldProperties