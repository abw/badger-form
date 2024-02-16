import React from 'react'
import { useForm } from './Context.jsx'
import { hasValue, isObject } from '@abw/badger-utils'

export const Debug = ({
  values=true,
  status=false,
  all=false,
  className='info alert border shadow-2 mar-t-4 pad-b-2',
  ...props
}) => {
  const form = useForm()
  return (
    <div className={className}>
      <h3 className="mar-t-none">Form Debugging</h3>
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
  )
}

const DebugTable = ({
  title,
  rows,
  children,
  tableClass='celled wide small mar-h-1 pad-none mar-b-4',
  titleClass='bgc-70 bgd-30',
  ...props
}) =>
  <table className={tableClass}>
    <thead>
      <tr>
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
  keyClass='bgc-80 bgd-20 fgc-30 fgd-70 text-right split-3',
  valueClass='font-mono bgc-95 bgd-5',
}) =>
  <tr valign="top">
    <td className={keyClass}>
      {name}
    </td>
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