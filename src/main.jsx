import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MainPage from './MainPage.jsx'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import UtilityProjects from './UtilityProjects.jsx'
import HomePage from './HomePage.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element: <div>
      <MainPage></MainPage>
   
    </div>,
    children:[
      {
        path:'/',
        element:<HomePage></HomePage>
      },
      {
        path:'utility-projects',
        element: <UtilityProjects></UtilityProjects>
      }
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>

    </RouterProvider>
  </StrictMode>,
)
