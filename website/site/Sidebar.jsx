import React from 'react'
import Menu from './Menu.jsx'
import { Main, Tutorial } from './Menus.jsx'

const Sidebar = () =>
  <div>
    <Menu title="Menu" items={Main}/>
    <Menu title="Tutorial" items={Tutorial}/>
  </div>


export default Sidebar