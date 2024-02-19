import { Form, Fields } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Fields } from '@abw/badger-form'

const fields = {
  alpha:    { label: 'Alpha'    },
  bravo:    { label: 'Bravo'    },
  charlie:  { label: 'Charlie'  },
  delta:    { label: 'Delta'    },
  echo:     { label: 'Echo'     },
  foxtrot:  { label: 'Foxtrot'  },
}

const FieldsStackExample = () =>
  <Form fields={fields}>
    <Fields
      names="alpha bravo charlie delta echo foxtrot"
      grid={3} stack="tablet"
    />
  </Form>

export default FieldsStackExample
