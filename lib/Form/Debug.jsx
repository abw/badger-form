import React from 'react'
import { useForm } from './Context.js'
import { hasValue, isObject } from '@abw/badger-utils'

export const Debug = ({
  values=true,
  status=false,
  all=false,
  className='border bdr-2 shadow-2 mar-v-4 pad-4 form-debug',
  title='Form Debugging',
  valuesTitle='Values',
  statusTitle='Status',
  ...props
}) => {
  const form = useForm()
  return (
    <div className={className}>
      { title &&
        <h3 className="mar-v-none">{title}</h3>
      }
      <div className="grid-1 gap-4">
        { values &&
          <div>
            { valuesTitle &&
              <h4 className="mar-v-none">{valuesTitle}</h4>
            }
            <DebugTable
              rows={Object.entries(form.values)}
              {...props}
            />
          </div>
        }
        { (status || all) && form.status &&
          <div>
            { statusTitle &&
              <h4>{statusTitle}</h4>
            }
            <DebugTable
              title="Status"
              rows={Object.entries(form.status)}
              {...props}
            />
          </div>
        }
      </div>
    </div>
  )
}

const DebugTable = ({
  rows,
  children,
  color='brand',
  tableClass=`${color} shaded celled wide small pad-none mar-b-0`,
  ...props
}) =>
  <table className={tableClass}>
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