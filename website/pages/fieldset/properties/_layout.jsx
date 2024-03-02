import React          from 'react'
import FieldsetPager  from '@/site/Pager/FieldsetPager.jsx'
import { Outlet }     from 'react-router-dom'

const FieldsetPropertiesLayout = () =>
  <div className="prose flow">
    <h1>Fieldset Properties</h1>
    <Outlet/>
    <FieldsetPager/>
  </div>

export default FieldsetPropertiesLayout