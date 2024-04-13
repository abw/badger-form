import React from 'react'

export const GettingStarted = {
  title: 'Getting Started',
  url: '/getting-started',
  items: [
    { to: '/getting-started/installation', text: 'Installation' },
    { to: '/getting-started/why-use-it', text: 'Why Use It?' },
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
    { to: '/form', code: 'Form', exact: true },
    {
      section: 'Properties',
      items: [
        { to: '/form/properties/fields',    code: 'fields'   },
        { to: '/form/properties/values',    code: 'values'   },
        { to: '/form/properties/hidden',    code: 'hidden'   },
        { to: '/form/properties/children',  code: 'children' },
        { to: '/form/properties/debug',     code: 'debug' },
        { to: '/form/properties/resetOnSuccess', code: 'resetOnSuccess' },
        { to: '/form/properties/unvalidateOnSuccess', code: 'unvalidateOnSuccess' },

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
        { to: '/form/functions/reset',      code: 'reset'      },
        { to: '/form/functions/unvalidate', code: 'unvalidate' },
        { to: '/form/functions/setFocus',   code: 'setFocus'   },
        { to: '/form/functions/setValues',  code: 'setValues'  },
      ]
    },
  ]
}

export const Field = {
  title:  'Field',
  url: '/field',
  items: [
    { to: '/field', code: 'Field', exact: true },
    {
      section: 'Properties',
      items: [
        { to: '/field/properties/name',         code: 'name'   },
        { to: '/field/properties/label',        code: 'label'   },
        { to: '/field/properties/type',         code: 'type'   },
        { to: '/field/properties/placeholder',  code: 'placeholder' },
        { to: '/field/properties/default',      code: 'default' },
        { to: '/field/properties/help',         code: 'help' },
        { to: '/field/properties/prefix',       code: 'prefix' },
        { to: '/field/properties/suffix',       code: 'suffix' },
        { to: '/field/properties/className',    code: 'className' },
        { to: '/field/properties/children',     code: 'children' },
      ]
    },
    {
      section: 'Validation',
      items: [
        { to: '/field/validation/required',           code: 'required'          },
        { to: '/field/validation/showRequired',       code: 'showRequired'      },
        { to: '/field/validation/requiredLabel',      code: 'requiredLabel'     },
        { to: '/field/validation/requiredMessage',    code: 'requiredMessage'   },
        { to: '/field/validation/showOptional',       code: 'showOptional'      },
        { to: '/field/validation/optionalLabel',      code: 'optionalLabel'     },
        { to: '/field/validation/prepareValue',       code: 'prepareValue'      },
        { to: '/field/validation/validate',           code: 'validate'          },
        { to: '/field/validation/validateOnBlur',     code: 'validateOnBlur'    },
        { to: '/field/validation/validateOnChange',   code: 'validateOnChange'  },
        { to: '/field/validation/validateOnInvalid',  code: 'validateOnInvalid' },
        { to: '/field/validation/minValidateLength',  code: 'minValidateLength' },
      ]
    },
    {
      section: 'Events',
      items: [
        { to: '/field/events/onFocus',    code: 'onFocus'   },
        { to: '/field/events/onBlur',     code: 'onBlur'    },
        { to: '/field/events/onChange',   code: 'onChange'  },
        { to: '/field/events/onValid',    code: 'onValid'   },
        { to: '/field/events/onInvalid',  code: 'onInvalid' },
        { to: '/field/events/onLoad',     code: 'onLoad'    },
      ]
    },
    {
      section: 'Functions',
      items: [
        { to: '/field/functions/setFocus',    code: 'setFocus'   },
        { to: '/field/functions/setValue',    code: 'setValue'   },
        { to: '/field/functions/setValid',    code: 'setValid'   },
        { to: '/field/functions/setInvalid',  code: 'setInvalid' },
        { to: '/field/functions/reset',       code: 'reset'      },
      ]
    },
    {
      section: 'Components',
      items: [
        { to: '/field/components/Layout',    code: 'Layout'    },
        { to: '/field/components/Label',     code: 'Label'     },
        { to: '/field/components/Input',     code: 'Input'     },
        { to: '/field/components/Message',   code: 'Message'   },
        { to: '/field/components/UseField',  code: 'UseField'  },
      ]
    },
  ]
}

export const Fields = {
  title:  'Fields',
  url: '/fields',
  items: [
    { to: '/fields', code: 'Fields', exact: true },
    {
      section: 'Properties',
      items: [
        { to: '/fields/properties/names',     code: 'names'   },
        { to: '/fields/properties/className', code: 'className'   },
        { to: '/fields/properties/grid',      code: 'grid'   },
        { to: '/fields/properties/gap',       code: 'gap'   },
        { to: '/fields/properties/stack',     code: 'stack'   },
      ]
    },
  ]
}

export const Fieldset = {
  title:  'Fieldset',
  url: '/fieldset',
  items: [
    { to: '/fieldset', code: 'Fieldset', exact: true },
    {
      section: 'Properties',
      items: [
        { to: '/fieldset/properties/legend',    code: 'legend'   },
        { to: '/fieldset/properties/fields',    code: 'fields'  },
        { to: '/fieldset/properties/className', code: 'className'   },
      ]
    },
  ]
}

export const Submit = {
  title:  'Submit',
  url: '/submit',
  items: [
    { to: '/submit', code: 'Submit', exact: true },
    {
      section: 'Properties',
      items: [
        { to: '/submit/properties/text',      code: 'text'      },
        { to: '/submit/properties/className', code: 'className' },
        { to: '/submit/properties/onClick',   code: 'onClick'   },
      ]
    },
  ]
}

export const Reset = {
  title:  'Reset',
  url: '/reset',
  items: [
    { to: '/reset', code: 'Reset', exact: true },
    {
      section: 'Properties',
      items: [
        { to: '/reset/properties/text',      code: 'text'      },
        { to: '/reset/properties/className', code: 'className' },
        { to: '/reset/properties/onClick',   code: 'onClick'   },
      ]
    },
  ]
}

export const ResetSubmit = {
  title:  'ResetSubmit',
  url: '/reset-submit',
  items: [
    { to: '/reset-submit', code: 'ResetSubmit', exact: true },
    {
      section: 'Properties',
      items: [
        { to: '/reset-submit/properties/gap',       code: 'gap'       },
        { to: '/reset-submit/properties/space',     code: 'space'     },
        { to: '/reset-submit/properties/size',      code: 'size'      },
        { to: '/reset-submit/properties/reset',     code: 'reset'     },
        { to: '/reset-submit/properties/submit',    code: 'submit'    },
        { to: '/reset-submit/properties/className', code: 'className' },
      ]
    },
  ]
}

export const CancelSubmit = {
  title:  'CancelSubmit',
  url: '/cancel-submit',
  items: [
    { to: '/cancel-submit', code: 'CancelSubmit', exact: true },
    {
      section: 'Properties',
      items: [
        { to: '/cancel-submit/properties/gap',       code: 'gap'       },
        { to: '/cancel-submit/properties/space',     code: 'space'     },
        { to: '/cancel-submit/properties/size',      code: 'size'      },
        { to: '/cancel-submit/properties/cancel',    code: 'cancel'    },
        { to: '/cancel-submit/properties/submit',    code: 'submit'    },
        { to: '/cancel-submit/properties/className', code: 'className' },
      ]
    },
  ]
}

export const Errors = {
  title:  'Errors',
  url: '/errors',
  items: [
    { to: '/errors', code: 'Errors', exact: true },
    {
      section: 'Properties',
      items: [
        { to: '/errors/properties/fieldErrors', code: 'fieldErrors'    },
        { to: '/errors/properties/title',       code: 'title'    },
        { to: '/errors/properties/prompt',      code: 'prompt'    },
      ]
    },
  ]
}

export const Changed = {
  title:  'Changed',
  url: '/changed',
  items: [
    { to: '/changed', code: 'Changed', exact: true },
  ]
}

export const Status = {
  title:  'Status',
  url: '/status',
  items: [
    { to: '/status', code: 'Status', exact: true },
    {
      section: 'Properties',
      items: [
        { to: '/status/properties/changed',      code: 'changed'    },
        { to: '/status/properties/validating',   code: 'validating' },
        { to: '/status/properties/valid',        code: 'valid'      },
        { to: '/status/properties/invalid',      code: 'invalid'    },
        { to: '/status/properties/submitting',   code: 'submitting' },
        { to: '/status/properties/submitted',    code: 'submitted'  },
        { to: '/status/properties/any',          code: 'any'        },
      ]
    },
  ]
}

export const Debug = {
  title:  'Debug',
  url: '/debug',
  items: [
    { to: '/debug', code: 'Debug', exact: true },
    {
      section: 'Properties',
      items: [
        { to: '/debug/properties/status',       code: 'status'      },
        { to: '/debug/properties/values',       code: 'values'      },
        { to: '/debug/properties/title',        code: 'title'       },
        { to: '/debug/properties/valuesTitle',  code: 'valuesTitle' },
        { to: '/debug/properties/statusTitle',  code: 'statusTitle' },
        { to: '/debug/properties/color',        code: 'color'       },
        { to: '/debug/properties/className',    code: 'className'   },
      ]
    },
  ]
}

export const Text = {
  title:  'text',
  url: '/text',
  items: [
    { to: '/text', code: 'text', exact: true },
    {
      section: 'Properties',
      items: [
        { to: '/text/properties/inline',      code: 'inline'      },
        { to: '/text/properties/size',        code: 'size'        },
        { to: '/text/properties/type',        code: 'type'        },
        { to: '/text/properties/placeholder', code: 'placeholder' },
      ]
    },
  ]
}

export const Textarea = {
  title:  'textarea',
  url: '/textarea',
  items: [
    { to: '/textarea', code: 'textarea', exact: true },
    {
      section: 'Properties',
      items: [
        { to: '/textarea/properties/inline',      code: 'inline'      },
        { to: '/textarea/properties/cols',        code: 'cols'        },
        { to: '/textarea/properties/rows',        code: 'rows'        },
        { to: '/textarea/properties/placeholder', code: 'placeholder' },
      ]
    },
  ]
}

export const Checkbox = {
  title:  'checkbox',
  url: '/checkbox',
  items: [
    { to: '/checkbox', code: 'checkbox', exact: true },
    {
      section: 'Properties',
      items: [
        { to: '/checkbox/properties/text',       code: 'text'       },
        { to: '/checkbox/properties/border',     code: 'border'     },
        { to: '/checkbox/properties/inline',     code: 'inline'     },
        { to: '/checkbox/properties/inputClass', code: 'inputClass' },
      ]
    },
  ]
}

export const Radio = {
  title:  'radio',
  url: '/radio',
  items: [
    { to: '/radio', code: 'radio', exact: true },
    {
      section: 'Properties',
      items: [
        { to: '/radio/properties/options',      code: 'options'      },
        { to: '/radio/properties/inline',       code: 'inline'       },
        { to: '/radio/properties/border',       code: 'border'       },
        { to: '/radio/properties/inputClass',   code: 'inputClass'   },
        { to: '/radio/properties/optionClass',  code: 'optionClass'  },
        { to: '/radio/properties/optionsClass', code: 'optionsClass' },
      ]
    },
  ]
}

export const Select = {
  title:  'select',
  url: '/select',
  items: [
    { to: '/select', code: 'select', exact: true },
    {
      section: 'Properties',
      items: [
        { to: '/select/properties/options',     code: 'options'     },
        { to: '/select/properties/inline',      code: 'inline'      },
        { to: '/select/properties/placeholder', code: 'placeholder' },
      ]
    },
  ]
}

export const Utils = {
  title: 'Utilities',
  url: '/utilities',
  items: [
    { to: '/utils/addInputType',     code: 'addInputType()' },
  ]
}


export const OldField = [
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

/*
export const Fields = [
  { to: '/fields',        text: <code>Fields</code> },
  { to: '/fields/names',   text: <code>names</code> },
  { to: '/fields/grid',    text: <code>grid</code> },
  { to: '/fields/gap',     text: <code>gap</code> },
]
*/