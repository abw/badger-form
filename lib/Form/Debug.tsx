import { useForm } from './Context'
import { hasValue, isSimple } from '@abw/badger-utils'
import { FormDebugProps, FormDebugRowProps, FormDebugTableProps, FormDebugValueProps } from './types'

export const Debug = ({
  values=true,
  status=false,
  all=false,
  className='border bdr-2 shadow-2 mar-v-4 pad-4 form-debug',
  title='Form Debugging',
  valuesTitle='Values',
  statusTitle='Status',
  titleClass='mar-v-none',
  valuesTitleClass='mar-v-none',
  statusTitleClass='mar-v-none',
  ...props
}: FormDebugProps) => {
  const form = useForm()
  return (
    <div className={className}>
      { title &&
        <h3 className={titleClass}>{title}</h3>
      }
      <div className="grid-1 gap-4">
        { values &&
          <div>
            { valuesTitle &&
              <h4 className={valuesTitleClass}>{valuesTitle}</h4>
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
              <h4 className={statusTitleClass}>{statusTitle}</h4>
            }
            <DebugTable
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
}: FormDebugTableProps) =>
  <table className={tableClass}>
    <tbody>
      { children || rows.map(
        ([name, value]) =>
          <DebugRow
            {...props}
            key={name}
            name={name}
            value={value}
          />
      )}
    </tbody>
  </table>

const DebugRow = ({
  name,
  value,
  keyClass='text-right split-3',
  valueClass='font-mono bgc-95 bgd-5',
}: FormDebugRowProps) =>
  <tr className="baseline">
    <th className={keyClass}>
      {name}
    </th>
    <td className={valueClass}>
      <DebugValue value={value}/>
    </td>
  </tr>

const DebugValue = ({
  value
}: FormDebugValueProps) => {
  return hasValue(value)
    ? isSimple(value)
      ? String(value)
      : JSON.stringify(value)
    : ''
}

export default Debug