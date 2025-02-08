import { Form, Field, Submit, Debug } from '@/lib/index'

{/* START */}
import React from 'react'
import { sleep } from '@abw/badger-utils'
// PRETEND: import { Form, Field, Submit, Debug } from '@abw/badger-form'

const ResetOnSuccessExample = () => {
  const [reset, setReset] = React.useState(false)
  const onSubmit = () => sleep(1000)
    .then( () => ({ ok: true }) )

  return (
    <Form onSubmit={onSubmit} resetOnSuccess={reset}>
      <Field name="name" label="Name"/>
      <Field name="email" label="Email Address"/>
      <div className="flex space gap-2">
        <label>
          <input
            type="checkbox"
            onChange={e => setReset(e.target.checked)}
            checked={reset}
          />
          resetOnSuccess
        </label>
        <Submit/>
      </div>
      <Debug status/>
    </Form>
  )
}

export default ResetOnSuccessExample