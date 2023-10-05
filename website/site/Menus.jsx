import React from 'react'

export const Main = [
  { to: '/', text: 'Home' },
  { to: '/getting-started', text: 'Getting Started' },
  // { to: '/test', text: 'Test #1' },
  // { to: '/test2', text: 'Test #2' },
  // { to: '/test3', text: 'Test #3' },
]

export const Tutorial = [
  { to: '/tutorial/basic-form',       text: 'A Basic Form' },
  // { to: '/tutorial/form-properties',  text: 'Form Properties' },
  // { to: '/tutorial/field-properties', text: 'Field Properties' },
  // { to: '/tutorial/field-types',      text: 'Field Types' },
  // { to: '/tutorial/field-validation', text: 'Field Validation' },
]

export const Field = [
  { to: '/field',                     text: <code>Field</code>, exact: true },
  { to: '/field/name',                text: <code>name</code> },
  { to: '/field/type',                text: <code>type</code> },
  { to: '/field/label',               text: <code>label</code> },
  { to: '/field/help',                text: <code>help</code> },
  { to: '/field/validate',            text: <code>validate</code> },
  { to: '/field/validate-on-change',  text: <code>validateOnChange</code> },
  { to: '/field/prepare-value',       text: <code>prepareValue</code> },
  { to: '/field/watch-field',         text: <code>watchField</code> },
  { to: '/field/wide',                text: <code>wide</code> },
  { to: '/field/input',               text: <code>Input</code> },
]
export const Form = [
  { to: '/form',           text: <code>Form</code>, exact: true },
  { to: '/form/fields',    text: <code>fields</code> },
  { to: '/form/values',    text: <code>values</code> },
  { to: '/form/onsubmit',  text: <code>onSubmit</code> },
  { to: '/form/onsuccess', text: <code>onSuccess</code> },
  { to: '/form/debug',     text: <code>Debug</code> },
]

export const Controls = [
  { to: '/controls',               text: <code>Controls</code>, exact: true },
  { to: '/controls/reset',         text: <code>Reset</code> },
  { to: '/controls/submit',        text: <code>Submit</code> },
  { to: '/controls/reset-submit',  text: <code>ResetSubmit</code> },
]

export const Fields = [
  { to: '/fields',        text: <code>Fields</code> },
  { to: '/fields/names',   text: <code>names</code> },
  { to: '/fields/grid',    text: <code>grid</code> },
  { to: '/fields/gap',     text: <code>gap</code> },
]