import React from 'react'
import MenuItem from './MenuItem.jsx'
// import { useResolvedPath } from 'react-router-dom'

export const MenuItems = ({ url, items=[] }) => {
  // const resolved = useResolvedPath()
  // const prefix   = resolved.pathname.slice(0, url.length + 1)
  // const open     = prefix === url + '/' || prefix === url  // better way?
  return (
    <ul className="menu">
      { items.map(
        (item, n) =>
          <MenuItem key={n} item={item} url={url} open={true}/>
      )}
    </ul>
  )
}

export default MenuItems