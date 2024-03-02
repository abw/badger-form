import React     from 'react'
import FormPager from '@/site/Pager/FormPager.jsx'
import { Outlet } from 'react-router-dom'

const FormEventsLayout = () =>
  <div className="prose flow">
    <h1>Form Events</h1>
    <Outlet/>
    <FormPager/>
  </div>

export default FormEventsLayout