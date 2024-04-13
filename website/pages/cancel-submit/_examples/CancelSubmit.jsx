import { Form, Field, Button, CancelSubmit } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Button, CancelSubmit } from '@abw/badger-form'

const ResetSubmitExample = () => {
  const [editing, setEditing] = React.useState(false)
  const [data, setData] = React.useState({
    name: 'Brian',
    animal: 'Badger'
  })
  const onSubmit = values => {
    setData(values)
    setEditing(false)
    return { ok: true }
  }
  return editing
    ? <Form values={data} onSubmit={onSubmit}>
        <Field name="name"  label="Name"/>
        <Field name="animal" label="Animal"/>
        <CancelSubmit
          space
          cancel={{
            onClick: () => setEditing(false),
            className: 'grey outline'
          }}
          submit={{
            className: 'green'
          }}
        />
      </Form>
    : <div className="flex space">
        <h3>{data.name} {data.animal}</h3>
        <Button
          text="Edit"
          onClick={() => setEditing(true)}
          className="blue"
        />
      </div>
}


export default ResetSubmitExample
