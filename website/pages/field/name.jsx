import React from 'react'
import Example       from '../../site/Example.jsx'
import FieldNameCode from '../../examples/tutorial/FieldName.jsx'
import FieldNameSrc  from '../../examples/tutorial/FieldName.jsx?raw'
import Pager from '../../site/Pager/index.jsx'
import { Tutorial } from '../../site/Menus.jsx'

const FieldName = () =>
  <div className="prose">
    <h1>Field</h1>
    <h2 className="font-mono">name</h2>
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
    <Example
      Component={FieldNameCode}
      code={FieldNameSrc}
      caption="Field Name"
      expand
    />

    <Pager menu={Tutorial}/>
  </div>

export default FieldName