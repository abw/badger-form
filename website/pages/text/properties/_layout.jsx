import React      from 'react'
import { Outlet } from '@abw/badger-website'

export const metadata = {
  prevNext: false,
}

const TextPropertiesLayout = () =>
  <>
    <h1>Text Properties</h1>
    <Outlet/>
  </>

export default TextPropertiesLayout
