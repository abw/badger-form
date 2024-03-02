import React        from 'react'
import Context      from './Context.jsx'
import Header       from './Header.jsx'
import Sidebar      from './Sidebar.jsx'
import Footer       from './Footer.jsx'
import ScrollToTop  from '@/utils/ScrollToTop.jsx'
import { Outlet }   from 'react-router-dom'
import { useTheme } from '@abw/react-night-and-day'

const Layout = ({ contentRef }) => {
  const { theme, variant } = useTheme()
  const classes = [theme, variant].join(' ')
  return (
    <div id="site" className={classes}>
      <Header/>
      <div id="app">
        <ScrollToTop/>
        <aside>
          <Sidebar/>
        </aside>
        <main id="content" ref={contentRef}>
          <div className="Xdesktop Xblock-center">
            <Outlet/>
          </div>
        </main>
      </div>
      <Footer/>
    </div>
  )
}

export default Context.Consumer(Layout)