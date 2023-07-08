import React from 'react'
import Pager from '../../site/Pager/index.jsx'
import { Tutorial } from '../../site/Menus.jsx'

const FieldValidation = () =>
  <div className="Xprose">
    <h1>Field Validation</h1>
    <h2>Validation Facets</h2>
    <h3>TODO</h3>
    <ul>
      <li>required</li>
      <li>minLength, maxLength</li>
      <li>min, max</li>
      <li>pattern</li>
      <li>validate</li>
    </ul>

    <h2>Validation Messages</h2>
    <h3>TODO</h3>
    <ul>
      <li>Define as object in facet, e.g. <code>required: {'{'} value: true, message: &apos;XXX&apos; {'}'}</code></li>
      <li>Define in <code>messages</code> object</li>
    </ul>
    <Pager menu={Tutorial}/>
  </div>

export default FieldValidation