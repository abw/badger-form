import React     from 'react'
import FormPager from '@/site/Pager/FormPager.jsx'
import { Outlet } from 'react-router-dom'

const FormFunctionsLayout = () =>
  <div className="prose flow">
    <h1>Form Functions</h1>
    <Outlet/>
    <FormPager/>
  </div>

export default FormFunctionsLayout