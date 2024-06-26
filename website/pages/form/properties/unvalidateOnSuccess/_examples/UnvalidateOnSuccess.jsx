import { Form, Field, ResetSubmit, Debug } from '@/lib/index.js'

{/* START */}
import React from 'react'
import { sleep } from '@abw/badger-utils'
// PRETEND: import { Form, Field, ResetSubmit, Debug } from '@abw/badger-form'

const UnvalidateOnSuccessExample = () => {
  const onSubmit = () => sleep(1000)
    .then( () => ({ ok: true }) )

  return (
    <Form onSubmit={onSubmit} unvalidateOnSuccess>
      <Field name="name" label="Name"/>
      <Field name="email" label="Email Address"/>
      <ResetSubmit space/>
      <Debug status/>
    </Form>
  )
}

export default UnvalidateOnSuccessExample