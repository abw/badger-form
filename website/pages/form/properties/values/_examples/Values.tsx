import { Form, Field, Submit } from '@/lib/index'

{/* START */}
// PRETEND: import { Form, Field, Submit } from '@abw/badger-form'

const ValuesExample = () => {
  const values = {
    name: 'Bobby Badger',
    email: 'bobby@badgerpower.com'
  }

  return (
    <Form values={values}>
      <Field name="name" label="Name"/>
      <Field name="email" label="Email Address"/>
      <Submit/>
    </Form>
  )
}

export default ValuesExample