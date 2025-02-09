import React from 'react'
import Field from './Field'
import { isBoolean, splitList } from '@abw/badger-utils'
import { gridGapClasses } from './Utils'

export const Fields = ({
  names,
  className,
  grid=false,
  gap=4,
  stack,
  ...props
}) => {
  const namesList = splitList(names)
  if (isBoolean(grid) && grid) {
    grid = namesList.length
  }
  return (
    <div className={gridGapClasses({grid, gap, stack, props}, className)}>
      { namesList.map(
        (name) => <Field key={name} name={name} {...props}/>
      )}
    </div>
  )
}

export default Fields
