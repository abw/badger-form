import React     from 'react'
import { Outlet } from '@abw/badger-website'

export const metadata = {
  prevNext: false,
}

export const Layout = () =>
  <>
    <h1>Form Events</h1>
    <Outlet/>
  </>

export default Layout

