import { Form, Field, Submit } from '@/lib/index'

{/* START */}
// PRETEND: import { Form, Field, Submit } from '@abw/badger-form'

const HiddenExample = () => {
  const hidden = {
    user_id: 12345
  }
  const user = {
    name: 'Bobby Badger',
    email: 'bobby@badgerpower.com'
  }

  return (
    <Form
      values={user}
      hidden={hidden}
    >
      <Field name="name" label="Name"/>
      <Field name="email" label="Email Address"/>
      <Submit/>
    </Form>
  )
}

export default HiddenExample