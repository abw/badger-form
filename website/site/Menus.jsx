import React from 'react'

export const GettingStarted = {
  title: 'Getting Started',
  url: '/getting-started',
  items: [
    { to: '/getting-started/installation', text: 'Installation' },
    // { to: '/getting-started/styling', text: 'Styling with CSS' },
  ]
  // { to: '/test', text: 'Test #1' },
  // { to: '/test2', text: 'Test #2' },
  // { to: '/test3', text: 'Test #3' },
}

export const Tutorial = {
  title:  'Tutorial',
  url: '/tutorial',
  items: [
    { to: '/tutorial/basic-form',            text: 'A Basic Form' },
    { to: '/tutorial/field-validation',      text: 'Field Validation' },
    { to: '/tutorial/form-validation',       text: 'Form Validation' },
    { to: '/tutorial/form-submission',       text: 'Form Submission' },
    { to: '/tutorial/submission-response',   text: 'Submission Response' },
    { to: '/tutorial/submission-errors',     text: 'Submission Errors' },
    { to: '/tutorial/complete-registration', text: 'Registration Form' },
    { to: '/tutorial/edit-form',             text: 'Edit Form' },
    { to: '/tutorial/debugging',             text: 'Debugging' },
    { to: '/tutorial/headless-fields',       text: 'Headless Fields' },
  // { to: '/tutorial/form-properties',  text: 'Form Properties' },
  // { to: '/tutorial/field-properties', text: 'Field Properties' },
  // { to: '/tutorial/field-types',      text: 'Field Types' },
  // { to: '/tutorial/field-validation', text: 'Field Validation' },
  ]
}

export const Form = {
  title:  'Form',
  url: '/form',
  items: [
    { to: '/form', text: 'Form', className: 'font-mono', exact: true },
    {
      section: 'Properties',
      items: [
        { to: '/form/properties/fields',    code: 'fields'   },
        { to: '/form/properties/values',    code: 'values'   },
        { to: '/form/properties/hidden',    code: 'hidden'   },
        { to: '/form/properties/children',  code: 'children' },
      ]
    },
    {
      section: 'Validation',
      items: [
        { to: '/form/validation/validate',          code: 'validate'          },
        { to: '/form/validation/validateOnBlur',    code: 'validateOnBlur'    },
        { to: '/form/validation/validateOnChange',  code: 'validateOnChange'  },
        { to: '/form/validation/validateOnInvalid', code: 'validateOnInvalid' },
        { to: '/form/validation/minValidateLength', code: 'minValidateLength' },
        { to: '/form/validation/showRequired',      code: 'showRequired'      },
        { to: '/form/validation/requiredLabel',     code: 'requiredLabel'     },
        { to: '/form/validation/requiredMessage',   code: 'requiredMessage'   },
        { to: '/form/validation/showOptional',      code: 'showOptional'      },
        { to: '/form/validation/optionalLabel',     code: 'optionalLabel'     },
        { to: '/form/validation/focusInvalidField', code: 'focusInvalidField' },
        { to: '/form/validation/resetOnSuccess',    code: 'resetOnSuccess'    },
      ]
    },
    {
      section: 'Events',
      items: [
        { to: '/form/events/onLoad',    code: 'onLoad'    },
        { to: '/form/events/onReset',   code: 'onReset'   },
        { to: '/form/events/onSubmit',  code: 'onSubmit'  },
        { to: '/form/events/onSuccess', code: 'onSuccess' },
        { to: '/form/events/onError',   code: 'onError'   },
      ]
    },
    {
      section: 'Functions',
      items: [
        { to: '/form/functions/reset',      code: 'reset'     },
        { to: '/form/functions/setFocus',   code: 'setFocus'  },
        { to: '/form/functions/setValues',  code: 'setValues' },
      ]
    },
  ]
}

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