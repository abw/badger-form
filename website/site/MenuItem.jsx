import React from 'react'
import Link from './Link.jsx'
import { isObject, fail } from '@abw/badger-utils'
import MenuItems from './MenuItems.jsx'

export const MenuItem = ({ item, url }) => {
  if (isObject(item)) {
    if (item.section) {
      return (
        <li className="section">
          <h4>{item.section}</h4>
          <MenuItems url={url} items={item.items}/>
        </li>
      )
    }
    item.text ||= item.code
    return (
      <li>
        <Link className={`item ${item.code ? 'font-mono' : ''}`} {...item}/>
      </li>
    )
  }
  fail(`Invalid menu item: ${item}`)
}

export default MenuItem
