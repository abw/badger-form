import { Form, Field, Submit, Errors } from '@/lib/index'

{/* START */}
// PRETEND: import { Form, Field, Errors, Submit } from '@abw/badger-form'

const onFire = () => {
  throw `The server is on fire.  Please try again later.`
}

const OnSubmitThrow = () =>
  <Form onSubmit={onFire}>
    <Field
      name="username"
      label="Pick a username"
    />
    <Errors/>
    <Submit/>
  </Form>

export default OnSubmitThrow