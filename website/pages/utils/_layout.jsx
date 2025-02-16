import { Outlet } from '@abw/badger-website'

export const metadata = {
  prevNext: false,
}

const UtilsLayout = () =>
  <>
    <h1>Utilities</h1>
    <Outlet/>
  </>

export default UtilsLayout