import React from 'react'
import { useForm } from './Context.jsx'
import { hasValue, isObject } from '@abw/badger-utils'

const FORM_STATE_FLAGS = [
  'isLoading', 'isDirty',
  'isValidating', 'isValid',
  'isSubmitting', 'isSubmitted', 'isSubmitSuccessful',
  'submitCount'
]

export const Debug = ({
  className='info alert border shadow-2 mar-t-4 pad-b-2'
}) => {
  const { formState, watch } = useForm()
  const values = watch()

  return (
    <div className={className}>
      <h3 className="mar-t-none">Form Debugging</h3>
      <DebugTable
        title="values"
        rows={Object.entries(values)}
      />
      <DebugTable
        title="formState"
      >
        { FORM_STATE_FLAGS.map(
          name => <DebugRow key={name} name={name} value={formState[name]}/>
        )}
        <DebugRow
          name="defaultValues"
          value={formState.defaultValues}
        />
        <DebugRow
          name="touchedFields"
          value={Object.keys(formState.touchedFields).join(', ')}
        />
        <DebugRow
          name="dirtyFields"
          value={Object.keys(formState.dirtyFields).join(', ')}
        />
        <DebugRow
          name="errors"
          value={formState.errors}
        />
      </DebugTable>
    </div>
  )
}

const DebugTable = ({title, rows, children}) =>
  <table className="blue celled wide small mar-h-1 pad-none mar-b-4">
    <thead>
      <tr>
        <th colSpan={2} className="bgc-70 bgd-30">{title}</th>
      </tr>
    </thead>
    <tbody>
      { children || rows.map(
        ([name, value]) => <DebugRow key={name} name={name} value={value}/>
      )}
    </tbody>
  </table>

const DebugRow = ({name, value}) =>
  <tr valign="top">
    <td className="bgc-80 bgd-20 fgc-30 fgd-70 text-right split-3">
      {name}
    </td>
    <td className="font-mono bgc-95 bgd-5">
      <DebugValue value={value}/>
    </td>
  </tr>

const DebugValue = ({value}) => {
  if (isObject(value)) {
    return JSON.stringify(value)
  }
  return hasValue(value)
    ? value.toString()
    : ''
}


export default Debug