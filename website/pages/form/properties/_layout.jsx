import React     from 'react'
import FormPager from '@/site/Pager/FormPager.jsx'
import { Outlet } from 'react-router-dom'

const FormPropertiesLayout = () =>
  <div className="prose flow">
    <h1>Form Properties</h1>
    <Outlet/>
    <FormPager/>
  </div>

export default FormPropertiesLayout