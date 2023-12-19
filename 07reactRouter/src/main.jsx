import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home/Home'
import AboutUs from './components/About/AboutUS'
import ContactUS from './components/Contact/ContactUS'
import User from './components/User/User'
import Github from './components/Github/Github'

const router = createBrowserRouter([
  {
    path : '/',
    element : <Layout />,
    children : [{
      path : "",
      element : <Home />
    },
     {
      path : "About",
      element : <AboutUs />
     },
     {
      path : "Contact",
      element : <ContactUS />
     },
     {
      path : "user/:userid",
      element : <User />
     },
     {
      path : "github",
      element : <Github />
     }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
