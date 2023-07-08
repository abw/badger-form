import React from 'react'
import Form from '../../lib/Form.jsx'
import Field from '../../lib/Field.jsx'
// import UseForm from '../../lib/Form/UseForm.jsx'
import Submit from '../../lib/Control/Submit.jsx'


const Test = () => {
  return (
    <Form
      className="border bdc-80 bgc-95 bgd-10 bdd-30 pad-6 bdr-2"
      style={{ width: '20rem' }}
    >
      <h3>Demo Form</h3>
      <Field name="name" label="Name" wide/>
      <Field
        name="uri"
        label="lower-case-name"
        prepareValue={v => v.toLowerCase().replaceAll(/\W+/g, '-')}
        watchField="name"
        wide
      />
      <Field
        name="upper"
        label="UPPER CASE NAME"
        prepareValue={v => v.toUpperCase()}
        watchField="name"
        wide
      />
      <Field
        name="copycat"
        label="Exact copy of name"
        watchField="name"
        wide
      />
      {/* <UpperCaseField name="foo"/> */}
      <Submit/>
    </Form>
  )
}


export default Test