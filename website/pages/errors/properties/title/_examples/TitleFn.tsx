import { Form, Field, Errors, ResetSubmit, FormSubmitHandler } from '@/lib/index'

{/* START */}
// PRETEND: import {
// PRETEND:  Form, Field, Errors, ResetSubmit,
// PRETEND:  FormSubmitHandler // TS type
// PRETEND: } from '@abw/badger-form'

// Simulated server-side validation which will reject
// any values containing vowels.
const noVowels: FormSubmitHandler = values => {
  const errors = Object.entries(values)
    .filter(
      ([ , value]) => (value as string).match(/[aeiou]/)
    )
    .map(
      ([name]) => ({
        name,
        message: `${name} cannot contain vowels`
      })
    )
  return errors.length
    ? Promise.reject({ errors })
    : Promise.resolve({ ok: true })
}

const TitleFnExample = () =>
  <Form onSubmit={noVowels}>
    <h3>No Vowels Allowed!</h3>
    <Field name="field1" label="Field One" required/>
    <Field name="field2" label="Field Two" required/>
    <Errors
      fieldErrors
      title={
        n => n === 1
          ? 'There is an error!'
          : `There are ${n} errors`
      }
    />
    <ResetSubmit space/>
  </Form>

export default TitleFnExample