import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './site/Router.jsx'
import { ThemeProvider } from '@abw/react-night-and-day'
import { RouterProvider, } from 'react-router-dom'
import './styles/badger-forms.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider storageKey="theme">
      <RouterProvider router={Router} />
    </ThemeProvider>
  </React.StrictMode>,
)
