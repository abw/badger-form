import React      from 'react'
import TextPager  from '@/site/Pager/TextPager.jsx'
import { Outlet } from 'react-router-dom'

const TextPropertiesLayout = () =>
  <div className="prose flow">
    <h1>Text Properties</h1>
    <Outlet/>
    <TextPager/>
  </div>

export default TextPropertiesLayout