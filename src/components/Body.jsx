import React from 'react'
import {createBrowserRouter} from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Browse from './Browse'
import Login from './Login'
import Main from './Main'
import Video from './Video'
import { useEffect } from 'react'
import {onAuthStateChanged } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useDispatch } from "react-redux";
import {addUser, removeUser} from '../store/userSlice'

function Body() {
   const dispatch = useDispatch();

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
        }
    ]);
    
    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const {uid,email,displayName,photoURL} = user;
          dispatch(addUser({uid: uid , email: email , displayName: displayName,photoURL:photoURL}));
        } else {
          // User is signed out
          dispatch(removeUser());
        }
      }); 
    }, []);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}
export default Body
