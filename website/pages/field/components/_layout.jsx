import React      from 'react'
import { Outlet } from '@abw/badger-website'

export const metadata = {
  prevNext: false,
}

const FieldComponentsLayout = () =>
  <>
    <h1>Field Components</h1>
    <Outlet/>
  </>

export default FieldComponentsLayout