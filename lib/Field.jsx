import React from 'react'
import { Provider }  from './Field/Context.jsx'
import Layout from './Field/Layout.jsx'
import { isArray, isFunction } from '@abw/badger-utils'

const Field = ({
  children,
  ...props
}) => {
  const childArray = children
    ? isArray(children)
      ? children
      : [children]
    : null

  return (
    <Provider {...props}>
      { childArray
        ? childArray.map(
          (child, n) =>
            <React.Fragment key={n}>
              { isFunction(child)
                ? child(props)
                : child
              }
            </React.Fragment>
        )
        : <Layout/>
      }
    </Provider>
  )
}
export default Field

/*
            ? <Consumer key={n}>
                CHILD FUNCTION
                {child}
              </Consumer>
*/