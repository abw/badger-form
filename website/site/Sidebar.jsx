import React from 'react'
import Menu from './Menu.jsx'
// import { GettingStarted, Controls, Field, Fields, Form, Tutorial } from './Menus.jsx'
import {
  GettingStarted, Tutorial, Form, Field, Fields, Fieldset, Submit, Reset
} from './Menus.jsx'

const Sidebar = () =>
  <div>
    <Menu {...GettingStarted}/>
    <Menu {...Tutorial}/>
    <Menu {...Form}/>
    <Menu {...Field}/>
    <Menu {...Fields}/>
    <Menu {...Fieldset}/>
    <Menu {...Submit}/>
    <Menu {...Reset}/>
    {/*
    <Menu title="Tutorial" items={Tutorial}/>
    <Menu title="Form" items={Form}/>
    <Menu title="Field" items={Field}/>
    <Menu title="Fields" items={Fields}/>
    <Menu title="Controls" items={Controls}/>
    */}
  </div>


export default Sidebar