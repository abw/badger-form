import React from 'react'
import { isArray, isFunction } from '@abw/badger-utils'

const Children = ({
  children,
  Context,
  Fallback
}) => {
  if (! children) {
    return <Fallback/>
  }
  const childArray = isArray(children)
    ? children
    : [children]

  return childArray.map(
    (child, n) => isFunction(child)
      ? <Context.Consumer key={n}>
          {child}
        </Context.Consumer>
      : child
  )
}

export default Children
