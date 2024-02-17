import React from 'react'
import Field from './Field.jsx'
import { isBoolean, splitList } from '@abw/badger-utils'
import { gridGapClasses } from './Utils.js'

export const Fields = ({
  names,
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
    <div className={gridGapClasses({grid, gap, stack, props})}>
      { namesList.map(
        (name) => <Field key={name} name={name} {...props}/>
      )}
    </div>
  )
}

export default Fields
