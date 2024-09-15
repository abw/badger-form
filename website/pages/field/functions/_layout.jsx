import React      from 'react'
import { Outlet } from '@abw/badger-website'

export const metadata = {
  prevNext: false,
}

const FieldFunctionsLayout = () =>
  <>
    <h1>Field Functions</h1>
    <Outlet/>
  </>

export default FieldFunctionsLayout