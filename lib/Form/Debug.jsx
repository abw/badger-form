import React from 'react'
import { useForm } from './Context.js'
import { hasValue, isObject } from '@abw/badger-utils'

export const Debug = ({
  values=true,
  status=false,
  all=false,
  className='border bdr-2 shadow-2 mar-t-4 pad-4',
  ...props
}) => {
  const form = useForm()
  return (
    <div className={className}>
      <h3 className="mar-t-none">Form Debugging</h3>
      <div className="grid-1 gap-4">
        { values &&
          <DebugTable
            title="values"
            rows={Object.entries(form.values)}
            {...props}
          />
        }
        { (status || all) && form.status &&
          <DebugTable
            title="Status"
            rows={Object.entries(form.status)}
            {...props}
          />
        }
      </div>
    </div>
  )
}

const DebugTable = ({
  title,
  rows,
  children,
  tableClass='brand shaded celled wide small pad-none mar-b-0',
  titleClass='',
  ...props
}) =>
  <table className={tableClass}>
    <thead>
      <tr className="grey40">
        <th colSpan={2} className={titleClass}>{title}</th>
      </tr>
    </thead>
    <tbody>
      { children || rows.map(
        ([name, value]) =>
          <DebugRow
            key={name}
            name={name}
            value={value}
            {...props}
          />
      )}
    </tbody>
  </table>

const DebugRow = ({
  name,
  value,
  // keyClass='bgc-80 bgd-20 fgc-30 fgd-70 text-right split-3',
  keyClass='text-right split-3',
  valueClass='font-mono bgc-95 bgd-5',
}) =>
  <tr valign="top">
    <th className={keyClass}>
      {name}
    </th>
    <td className={valueClass}>
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