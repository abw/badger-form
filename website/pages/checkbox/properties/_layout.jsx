import React          from 'react'
import CheckboxPager  from '@/site/Pager/CheckboxPager.jsx'
import { Outlet }     from 'react-router-dom'

const CheckboxPropertiesLayout = () =>
  <div className="prose flow">
    <h1>Checkbox Properties</h1>
    <Outlet/>
    <CheckboxPager/>
  </div>

export default CheckboxPropertiesLayout