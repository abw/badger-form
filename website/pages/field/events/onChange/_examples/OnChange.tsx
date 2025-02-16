import { Form, Field } from '@/lib/index'

{/* START */}
import { useState } from 'react'
// PRETEND: import { Form, Field } from '@abw/badger-form'

const OnChangeExample = () => {
  const [value, setValue] = useState<string>('')
  return (
    <Form>
      <Field
        name="example" label="Field with onChange"
        onChange={
          field => setValue(field.value as string)
        }
      />
      Current value: {value}
    </Form>
  )
}

export default OnChangeExample