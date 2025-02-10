// Sketching out distinct field types where properties are only added to the
// fields with a particular type (e.g. TextAreaField only has rows and cols)
type AnyField = {
  name: string
}

type CheckboxField = AnyField & {
  type: 'checkbox'
  value?: boolean
  text?: string
  inline?: boolean
  border?: boolean
}

type TextField = AnyField & {
  type: 'text'
  value?: string
}

type TextAreaField = TextField & {
  type: 'textarea'
  rows?: number
  cols?: number
}

type Field = CheckboxField | TextField | TextAreaField

const c: Field = {
  name: 'cb1',
  type: 'checkbox',
  value: true
}
const t: Field = {
  name: 'tf1',
  type: 'text',
  value: 'Yes'
}

const stuff = [c,t]