import React from 'react'
import Menu from './Menu.jsx'
// import { GettingStarted, Controls, Field, Fields, Form, Tutorial } from './Menus.jsx'
import { GettingStarted, Tutorial, Form } from './Menus.jsx'

const Sidebar = () =>
  <div>
    <Menu {...GettingStarted}/>
    <Menu {...Tutorial}/>
    <Menu {...Form}/>
    {/*
    <Menu title="Tutorial" items={Tutorial}/>
    <Menu title="Form" items={Form}/>
    <Menu title="Field" items={Field}/>
    <Menu title="Fields" items={Fields}/>
    <Menu title="Controls" items={Controls}/>
    */}
  </div>


export default Sidebar