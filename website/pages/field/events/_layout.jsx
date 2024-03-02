import React      from 'react'
import FieldPager from '@/site/Pager/FieldPager.jsx'
import { Outlet } from 'react-router-dom'

const FieldEventsLayout = () =>
  <div className="prose flow">
    <h1>Field Events</h1>
    <Outlet/>
    <FieldPager/>
  </div>

export default FieldEventsLayout