import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Agendar from './components/agendar/Agendar.tsx'
import ErrorPage from './components/errorPage/ErrorPage.tsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter ([
  {
    path: "/Barber/home",
    element: <App/>,
    errorElement: <ErrorPage/>
  },

  {
    path: "/Barber/home/agendar",
    element: <Agendar/>,
    errorElement: <ErrorPage/>
  }, 
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
