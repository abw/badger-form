import React       from 'react'
import FieldsPager from '@/site/Pager/FieldsPager.jsx'
import { Outlet }  from 'react-router-dom'

const FieldsPropertiesLayout = () =>
  <div className="prose flow">
    <h1>Fields Properties</h1>
    <Outlet/>
    <FieldsPager/>
  </div>

export default FieldsPropertiesLayout