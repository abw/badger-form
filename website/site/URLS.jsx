import { Field, Form } from './Menus.jsx'

export const URLS = {
  //--------------------------------------------------------------------------
  // Tutorial Links
  //--------------------------------------------------------------------------

  //--------------------------------------------------------------------------
  // Component links
  //--------------------------------------------------------------------------
  'component:Form': {
    url:    '/components/Form',
    code:   'Form',
    about:  'Main component for a form',
    menu:   Form,
  },
  'component:Field': {
    url:    '/components/Field',
    code:   'Field',
    about:  'Render a form field',
    menu:   Field,
  },
  'component:Fields': {
    url:    '/components/Fields',
    code:   'Fields',
    about:  'Render multiple form fields',
  },
  'component:Fieldset': {
    url:    '/components/Fieldset',
    code:   'Fieldset',
    about:  'Render a set of fields',
  },
  'component:Changed': {
    url:    '/components/Changed',
    code:   'Changed',
    about:  'Renders children only when a form state has changed',
  },
  'component:Submit': {
    url:    '/components/Submit',
    code:   'Submit',
    about:  'Render a form submit button',
  },
  'component:Reset': {
    url:    '/components/Reset',
    code:   'Reset',
    about:  'Render a form reset button',
  },
  'component:Cancel': {
    url:    '/components/Cancel',
    code:   'Cancel',
    about:  'Render a cancel button',
  },
  'component:ResetSubmit': {
    url:    '/components/ResetSubmit',
    code:   'ResetSubmit',
    about:  'Render reset and submit buttons',
  },
  'component:CancelSubmit': {
    url:    '/components/CancelSubmit',
    code:   'CancelSubmit',
    about:  'Render cancel and submit buttons',
  },
  'component:CancelResetSubmit': {
    url:    '/components/CancelResetSubmit',
    code:   'CancelResetSubmit',
    about:  'Render cancel, reset and submit buttons',
  },
  'component:Errors': {
    url:    '/components/Errors',
    code:   'Errors',
    about:  'Render form errors',
  },
  'component:Debug': {
    url:    '/components/Debug',
    code:   'Debug',
    about:  'Render debugging information for a form',
  },

  //--------------------------------------------------------------------------
  // Form links
  //--------------------------------------------------------------------------
  // properties
  'form:fields': {
    url:    '/components/Form/properties/fields',
    code:   'fields',
    about:  'Properties for form fields',
  },
  'form:values': {
    url:    '/components/Form/properties/values',
    code:   'values',
    about:  'Values for form fields',
  },
  'form:hidden': {
    url:    '/components/Form/properties/hidden',
    code:   'hidden',
    about:  'Hidden values for a form',
  },
  'form:children': {
    url:    '/components/Form/properties/children',
    code:   'children',
    about:  'Child components in a form',
  },
  //'validMessage',
  //'classes', 'wide'


  // validation
  'form:validate': {
    url:    '/components/Form/validation/validate',
    code:   'validate',
    about:  'Validation function for a form',
  },
  'form:showRequired': {
    url:    '/components/Form/validation/showRequired',
    code:   'showRequired',
    about:  'Show the "Required" tag for all required fields',
  },
  'form:requiredLabel': {
    url:    '/components/Form/validation/requiredLabel',
    code:   'requiredLabel',
    about:  'Set the default "Required" label for all required fields',
  },
  'form:requiredMessage': {
    url:    '/components/Form/validation/requiredMessage',
    code:   'requiredMessage',
    about:  'Set the default error message for required fields',
  },
  'form:showOptional': {
    url:    '/components/Form/validation/showOptional',
    code:   'showOptional',
    about:  'Show the "Optional" tag for all optional fields',
  },
  'form:optionalLabel': {
    url:    '/components/Form/validation/optionalLabel',
    code:   'optionalLabel',
    about:  'Set the default "Optional" label for all optional fields',
  },
  'form:validateOnBlur': {
    url:    '/components/Form/validation/validateOnBlur',
    code:   'validateOnBlur',
    about:  'Set fields to validate on blur by default',
  },
  'form:validateOnChange': {
    url:    '/components/Form/validation/validateOnChange',
    code:   'validateOnChange',
    about:  'Set fields to validate on change by default',
  },
  'form:validateOnInvalid': {
    url:    '/components/Form/validation/validateOnInvalid',
    code:   'validateOnInvalid',
    about:  'Set fields to validate on change when invalid',
  },
  'form:minValidateLength': {
    url:    '/components/Form/validation/minValidateLength',
    code:   'minValidateLength',
    about:  'Set default length of input to trigger validation',
  },
  'form:focusInvalidField': {
    url:    '/components/Form/validation/focusInvalidField',
    code:   'focusInvalidField',
    about:  'Automatically focus the first field failing validation',
  },
  'form:resetOnSuccess': {
    url:    '/components/Form/validation/resetOnSuccess',
    code:   'resetOnSuccess',
    about:  'Reset the form after a successful submission',
  },

  // events
  'form:onLoad': {
    url:    '/components/Form/events/onLoad',
    code:   'onLoad',
    about:  'Function to be called when the form is loaded',
  },
  'form:onReset': {
    url:    '/components/Form/events/onReset',
    code:   'onReset',
    about:  'Function to be called when the form is reset',
  },
  'form:onSubmit': {
    url:    '/components/Form/events/onSubmit',
    code:   'onSubmit',
    about:  'Function to handle form submission',
  },
  'form:onSuccess': {
    url:    '/components/Form/events/onSuccess',
    code:   'onSuccess',
    about:  'Function to handle successful form submission',
  },
  'form:onError': {
    url:    '/components/Form/events/onError',
    code:   'onError',
    about:  'Function to handle failed form submission',
  },

  // functions
  'form:reset': {
    url:    '/components/Form/functions/reset',
    code:   'reset',
    about:  'Reset the form state',
  },
  'form:setFocus': {
    url:    '/components/Form/functions/setFocus',
    code:   'setFocus',
    about:  'Focus a form field',
  },
  'form:setValues': {
    url:    '/components/Form/functions/setValues',
    code:   'setValues',
    about:  'Set form values',
  },


  'form:classes': {
    url:    '/components/Form/classes',
    code:   'classes',
    about:  'Custom CSS classes for form components',
  },

  //--------------------------------------------------------------------------
  // Field
  //--------------------------------------------------------------------------
  // properties
  'field:children': {
    url:    '/components/Field/properties/children',
    code:   'children',
    about:  'Child functions in a field',
  },
  'field:help': {
    url:    '/components/Field/properties/help',
    code:   'help',
    about:  'Additional help for a field',
  },
  'field:label': {
    url:    '/components/Field/properties/label',
    code:   'label',
    about:  'A label for the field',
  },
  'field:name': {
    url:    '/components/Field/properties/name',
    code:   'name',
    about:  'The field name',
  },
  'field:placeholder': {
    url:    '/components/Field/properties/placeholder',
    code:   'placeholder',
    about:  'Add a placeholder to a field',
  },
  'field:prefix': {
    url:    '/components/Field/properties/prefix',
    code:   'prefix',
    about:  'Add a prefix to a field',
  },
  'field:suffix': {
    url:    '/components/Field/properties/suffix',
    code:   'suffix',
    about:  'Add a suffix to a field',
  },
  'field:type': {
    url:    '/components/Field/properties/type',
    code:   'type',
    about:  'The input type for a field',
  },
  'field:wide': {
    url:    '/components/Field/properties/wide',
    code:   'wide',
    about:  'Make field extend to the full width of the container',
  },

  // validation
  'field:minValidateLength': {
    url:    '/components/Field/validation/minValidateLength',
    code:   'minValidateLength',
    about:  'The minimum input length to trigger validation',
  },
  'field:optionalLabel': {
    url:    '/components/Field/validation/optionalLabel',
    code:   'optionalLabel',
    about:  'Customise the label displayed for optional fields',
  },
  'field:prepareValue': {
    url:    '/components/Field/validation/prepareValue',
    code:   'prepareValue',
    about:  'Define a handler to prepare the value entered for a field',
  },
  'field:required': {
    url:    '/components/Field/validation/required',
    code:   'required',
    about:  'Mark a field as being required',
  },
  'field:requiredLabel': {
    url:    '/components/Field/validation/requiredLabel',
    code:   'requiredLabel',
    about:  'Customise the label displayed for required fields',
  },
  'field:requiredMessage': {
    url:    '/components/Field/validation/requiredMessage',
    code:   'requiredMessage',
    about:  'Customise the error message generated for required fields',
  },
  'field:showOptional': {
    url:    '/components/Field/validation/showOptional',
    code:   'showOptional',
    about:  'Enable the label shown for optional fields',
  },
  'field:showRequired': {
    url:    '/components/Field/validation/showRequired',
    code:   'showRequired',
    about:  'Enable the label shown for required fields',
  },
  'field:validate': {
    url:    '/components/Field/validation/validate',
    code:   'validate',
    about:  'Handler to validate field input',
  },
  'field:validateOnBlur': {
    url:    '/components/Field/validation/validateOnBlur',
    code:   'validateOnBlur',
    about:  'Run field validation when it loses focus',
  },
  'field:validateOnChange': {
    url:    '/components/Field/validation/validateOnChange',
    code:   'validateOnChange',
    about:  'Run field validation when the value changes',
  },
  'field:validateOnInvalid': {
    url:    '/components/Field/validation/validateOnInvalid',
    code:   'validateOnInvalid',
    about:  'Run field validation when the value changes after failing validation',
  },

  // events
  'field:onBlur': {
    url:    '/components/Field/events/onBlur',
    code:   'onBlur',
    about:  'Define a handler to be called when a field loses focus',
  },
  'field:onChange': {
    url:    '/components/Field/events/onChange',
    code:   'onChange',
    about:  'Define a handler to be called when a field value changes',
  },
  'field:onFocus': {
    url:    '/components/Field/events/onFocus',
    code:   'onFocus',
    about:  'Define a handler to be called when a field gains focus',
  },
  'field:onInvalid': {
    url:    '/components/Field/events/onInvalid',
    code:   'onInvalid',
    about:  'Define a handler to be called when a field fails validation',
  },
  'field:onLoad': {
    url:    '/components/Field/events/onLoad',
    code:   'onLoad',
    about:  'Called when the field is loaded',
  },
  'field:onValid': {
    url:    '/components/Field/events/onValid',
    code:   'onValid',
    about:  'Define a handler to be called when a field passes validation',
  },

  // functions
  'field:reset': {
    url:    '/components/Field/functions/reset',
    code:   'reset()',
    about:  'Reset a field to its original state',
  },
  'field:setFocus': {
    url:    '/components/Field/functions/setFocus',
    code:   'setFocus()',
    about:  'Focus a field',
  },
  'field:setInvalid': {
    url:    '/components/Field/functions/setInvalid',
    code:   'setInvalid()',
    about:  'Set a field to be invalid',
  },
  'field:setValue': {
    url:    '/components/Field/functions/setValue',
    code:   'setValue()',
    about:  'Set a field value',
  },
  'field:setValid': {
    url:    '/components/Field/functions/setValid',
    code:   'setValid()',
    about:  'Set a field to be valid',
  },

  // components
  'field:Input': {
    url:    '/components/Field/components/Input',
    code:   'Input',
    about:  'Input component for a field',
  },
  'field:Label': {
    url:    '/components/Field/components/Label',
    code:   'Label',
    about:  'Label component for a field',
  },
  'field:Layout': {
    url:    '/components/Field/components/Layout',
    code:   'Layout',
    about:  'Layout component for a field',
  },
  'field:Message': {
    url:    '/components/Field/components/Message',
    code:   'Message',
    about:  'Message component for a field',
  },
  'field:UseField': {
    url:    '/components/Field/components/UseField',
    code:   'UseField',
    about:  'Provides field context for a deeply nested element',
  },

  //--------------------------------------------------------------------------
  // Input links
  //--------------------------------------------------------------------------
  'input:types': {
    url:    '/inputs',
    text:   'Input Types',
    about:  'Input components',
  },
  'input:Text': {
    url:    '/inputs/Text',
    code:   'text',
    about:  'Text input',
  },
  'input:TextArea': {
    url:    '/inputs/TextArea',
    code:   'textarea',
    about:  'Text area input',
  },
  'input:Checkbox': {
    url:    '/inputs/Checkbox',
    code:   'checkbox',
    about:  'Checkbox input',
  },
  'input:Radio': {
    url:    '/inputs/Radio',
    code:   'radio',
    about:  'Radio buttons input',
  },
  'input:Select': {
    url:    '/inputs/Select',
    code:   'select',
    about:  'Select list input',
  },
  'input:Hidden': {
    url:    '/inputs/Hidden',
    code:   'hidden',
    about:  'Hidden input',
  },

  //--------------------------------------------------------------------------
  // Customising links
  //--------------------------------------------------------------------------
  'custom:Input': {
    url:    '/customising/Input',
    text:   'Custom Input',
    about:  'Custom input component for a field',
  },

  //--------------------------------------------------------------------------
  // Styling Links
  //--------------------------------------------------------------------------
  'styling:css-classes': {
    url:    '/styling/css-classes',
    text:   'CSS Classes',
    about:  'Defining custom CSS classes',
  },
  'styling:css-variables': {
    url:    '/styling/css-variables',
    text:   'CSS Variables',
    about:  'Styling with CSS variables',
  },
  'styling:sass-variables': {
    url:    '/styling/SASS-variables',
    text:   'SASS Variables',
    about:  'SASS variable definitions',
  },
}


export default URLS