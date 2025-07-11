import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { RouterProvider } from 'react-router'
import { router } from './Router/Router.jsx'
import  './index.css'
import AuthProvider from './Contexts/AuthProvider.jsx'
import { HelmetProvider } from 'react-helmet-async'
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <AuthProvider>


  
<RouterProvider router={router}>


</RouterProvider>

  </AuthProvider>
  </StrictMode>,
)
