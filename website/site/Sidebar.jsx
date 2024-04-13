import React from 'react'
import Menu from './Menu.jsx'
import {
  GettingStarted, Tutorial, Form, Field, Fields, Fieldset,
  Submit, Reset, ResetSubmit, CancelSubmit,
  Text, Textarea, Checkbox, Radio, Select,
  Debug, Status, Errors, Utils,
} from './Menus.jsx'

const Sidebar = () =>
  <div>
    <Menu {...GettingStarted}/>
    <Menu {...Tutorial}/>

    <h4 className="mar-b-none">Components</h4>
    <Menu {...Form}/>
    <Menu {...Field}/>
    <Menu {...Fields}/>
    <Menu {...Fieldset}/>
    <Menu {...Submit}/>
    <Menu {...Reset}/>
    <Menu {...ResetSubmit}/>
    <Menu {...CancelSubmit}/>
    <Menu {...Errors}/>
    {/* <Menu {...Changed}/> */}
    <Menu {...Status}/>
    <Menu {...Debug}/>

    <h4 className="mar-b-none">Input Types</h4>
    <Menu {...Text}/>
    <Menu {...Textarea}/>
    <Menu {...Checkbox}/>
    <Menu {...Radio}/>
    <Menu {...Select}/>

    <h4 className="mar-b-none">Miscellaneous</h4>
    <Menu {...Utils}/>
    {/*
    <Menu title="Tutorial" items={Tutorial}/>
    <Menu title="Form" items={Form}/>
    <Menu title="Field" items={Field}/>
    <Menu title="Fields" items={Fields}/>
    <Menu title="Controls" items={Controls}/>
    */}
  </div>


export default Sidebar