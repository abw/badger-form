import React      from 'react'
import { Outlet } from '@abw/badger-website'

export const metadata = {
  prevNext: false,
}

const FieldEventsLayout = () =>
  <>
    <h1>Field Events</h1>
    <Outlet/>
  </>

export default FieldEventsLayout