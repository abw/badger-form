import Field from './Field'
import { isBoolean, splitList } from '@abw/badger-utils'
import { gridGapClasses } from './Utils'
import { FieldsComponentProps } from './types'

export const Fields = ({
  names,
  className,
  grid=false,
  gap=4,
  stack,
  ...props
}: FieldsComponentProps) => {
  const namesList = splitList(names) as string[]
  if (isBoolean(grid) && grid) {
    grid = namesList.length
  }
  return (
    <div className={gridGapClasses({grid, gap, stack, props}, className)}>
      { namesList.map(
        (name) =>
          <Field
            key={name as string}
            name={name}
            {...props}
          />
      )}
    </div>
  )
}

export default Fields
