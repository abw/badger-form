import React from 'react'
import Menu from './Menu.jsx'
import { Controls, Field, Fields, Form, Main, Tutorial } from './Menus.jsx'

const Sidebar = () =>
  <div>
    <Menu title="Menu" items={Main}/>
    <Menu title="Tutorial" items={Tutorial}/>
    <Menu title="Form" items={Form}/>
    <Menu title="Field" items={Field}/>
    <Menu title="Fields" items={Fields}/>
    <Menu title="Controls" items={Controls}/>
  </div>


export default Sidebar