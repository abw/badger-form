import React              from 'react'
import ReactDOM           from 'react-dom/client'
import Router             from '@/site/Router.jsx'
import SiteContext        from '@/site/Context.jsx'
import { ThemeProvider  } from '@abw/react-night-and-day'
import { RouterProvider } from 'react-router-dom'
import './styles/badger-form.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider storageKey="theme">
      <SiteContext.Provider>
        <RouterProvider router={Router} />
      </SiteContext.Provider>
    </ThemeProvider>
  </React.StrictMode>,
)
