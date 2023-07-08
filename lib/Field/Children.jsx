import React from 'react'
import Layout from './Layout.jsx'
import { isFunction } from '@abw/badger-utils'
import { Context } from './Context.jsx'
import { toArray } from '../Utils.js'

export const FieldChildren = ({ children }) =>
  children
    ? toArray(children).map(
      (child, n) => isFunction(child)
        ? <Context.Consumer key={n}>
            {child}
          </Context.Consumer>
        : child
    )
    : <Layout/>

export default FieldChildren
