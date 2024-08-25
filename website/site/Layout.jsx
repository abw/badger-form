import React        from 'react'
import Context      from './Context.jsx'
import Header       from './Header.jsx'
import Sidebar      from './Sidebar.jsx'
import Footer       from './Footer.jsx'
import ScrollToTop  from '@/utils/ScrollToTop.jsx'
import { Outlet }   from 'react-router-dom'
import { CLOSED, OPEN } from './Constants.jsx'

const Layout = ({ contentRef, theme, variant, sidebarOpen }) =>
  <div
    id="site"
    data-sidebar={variant}
    data-sidebar-action={sidebarOpen ? OPEN : CLOSED}
    data-theme={theme}
  >
    <Header/>
    <div id="app">
      <ScrollToTop/>
      <aside>
        <Sidebar/>
      </aside>
      <main id="content" ref={contentRef}>
        <Outlet/>
      </main>
    </div>
    <Footer/>
  </div>

export default Context.Consumer(Layout)