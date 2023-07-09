import React from 'react'
import FieldPager from '../../site/Pager/FieldPager.jsx'

const FieldIndex = () =>
  <div className="prose">
    <h1>Field</h1>
    <p>
      All of the basic HTML input properties are supported and can be
      set on a <code>Field</code> component.  This example demonstrates
      some of the more common ones.
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

    <FieldPager/>
  </div>

export default FieldIndex