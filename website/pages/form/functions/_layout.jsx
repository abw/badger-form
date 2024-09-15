import React from 'react'
import { Outlet } from '@abw/badger-website'

export const metadata = {
  prevNext: false,
}

const FormFunctionsLayout = () =>
  <>
    <h1>Form Functions</h1>
    <Outlet/>
  </>

export default FormFunctionsLayout