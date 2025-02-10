import Fields from './Fields'
import { FieldsetComponentProps } from './types'

export const Fieldset = ({
  className='',
  legend,
  children,
  fields,
  ...props
}: FieldsetComponentProps) =>
  <fieldset className={className}>
    { Boolean(legend) && <legend>{legend}</legend> }
    { Boolean(fields) && <Fields names={fields} {...props}/> }
    { children }
  </fieldset>

export default Fieldset
