import React      from 'react'
import { Outlet } from '@abw/badger-website'

export const metadata = {
  prevNext: false,
}

const ErrorsPropertiesLayout = () =>
  <>
    <h1>Errors Properties</h1>
    <Outlet/>
  </>

export default ErrorsPropertiesLayout
