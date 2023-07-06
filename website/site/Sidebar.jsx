import React from 'react'
import Menu from './Menu.jsx'
import { Main } from './Menus.jsx'

const Sidebar = () =>
  <div>
    <Menu title="Menu" items={Main}/>
  </div>


export default Sidebar