import React        from 'react'
import SelectPager  from '@/site/Pager/SelectPager.jsx'
import { Outlet }   from 'react-router-dom'

const SelectPropertiesLayout = () =>
  <div className="prose flow">
    <h1>Select Properties</h1>
    <Outlet/>
    <SelectPager/>
  </div>

export default SelectPropertiesLayout