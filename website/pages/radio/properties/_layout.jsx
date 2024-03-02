import React      from 'react'
import RadioPager from '@/site/Pager/RadioPager.jsx'
import { Outlet } from 'react-router-dom'

const RadioPropertiesLayout = () =>
  <div className="prose flow">
    <h1>Radio Properties</h1>
    <Outlet/>
    <RadioPager/>
  </div>

export default RadioPropertiesLayout