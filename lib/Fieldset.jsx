import React from 'react'
import Fields from './Fields.jsx'

export const Fieldset = ({
  className='',
  legend,
  children,
  fields,
  ...props
}) =>
  <fieldset className={className}>
    { Boolean(legend) && <legend>{legend}</legend> }
    { Boolean(fields) && <Fields names={fields} {...props}/> }
    { children }
  </fieldset>

export default Fieldset
