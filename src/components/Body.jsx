import React from 'react'
import {createBrowserRouter} from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Browse from './Browse'
import Login from './Login'

function Body() {
    const appRouter = createBrowserRouter([
        {
            path:'/',
            element: <Login />,
        },
        {
            path:'/Browse',
            element:<Browse />,
        }
    ]);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}
export default Body
