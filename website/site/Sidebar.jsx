import React from 'react'
import Menu from './Menu.jsx'
import { Field, Main, Tutorial } from './Menus.jsx'

const Sidebar = () =>
  <div>
    <Menu title="Menu" items={Main}/>
    <Menu title="Tutorial" items={Tutorial}/>
    <Menu title="Field" items={Field}/>
  </div>


export default Sidebar