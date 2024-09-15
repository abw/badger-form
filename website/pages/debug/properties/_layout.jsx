import React      from 'react'
import { Outlet } from '@abw/badger-website'

export const metadata = {
  prevNext: false,
}

const DebugPropertiesLayout = () =>
  <>
    <h1>Debug Properties</h1>
    <Outlet/>
  </>

export default DebugPropertiesLayout