import React      from 'react'
import { Outlet } from '@abw/badger-website'

export const metadata = {
  prevNext: false,
}

const StatusPropertiesLayout = () =>
  <>
    <h1>Status Properties</h1>
    <Outlet/>
  </>

export default StatusPropertiesLayout