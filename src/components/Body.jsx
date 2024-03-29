import React from 'react'
import {createBrowserRouter} from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Browse from './Browse'
import Login from './Login'
import Main from './Main'
import Video from './Video'
import Search from './Search'


function Body() {
    const appRouter = createBrowserRouter([
        {
            path:'/Login',
            element: <Login />,
        },
        {
            path:'/Browse',
            element:<Browse />,
        },
        {
          path:'/Main',
          element: <Main />
        },
        {
          path:'/',
          element:<Video />
        },
        {
          path:'/Search',
          element:<Search />
        }
    ]);
    
    
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}
export default Body
