import React from 'react'
// import { useState } from 'react'
import Context from './Context.jsx'
import { useResolvedPath } from 'react-router-dom'
import MenuItems from './MenuItems.jsx'

const Menu = ({ title, url, items }) => {
  const resolved = useResolvedPath()
  // const open = path && resolved.pathname.slice(0, path.length) === path
  const open = resolved.pathname.slice(0, url.length) === url
  //const [open, setOpen] = useState(
  //  resolved.pathname.slice(0, url.length) === url
  //)
  //const toggleOpen = () => {
  //  console.log(`toggling, open is `, open ? 'true' : 'false');
  //  setOpen( open => ! open )
  //}

  return (
    <details className="menu" open={open}>
      <summary>
        {title}
      </summary>
      <MenuItems url={url} items={items}/>
    </details>
  )
}

export default Context.Consumer(Menu)
