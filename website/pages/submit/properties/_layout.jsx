import React      from 'react'
import { Outlet } from '@abw/badger-website'

export const metadata = {
  prevNext: false,
}

const SubmitPropertiesLayout = () =>
  <>
    <h1>Submit Properties</h1>
    <Outlet/>
  </>

export default SubmitPropertiesLayout