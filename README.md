
# Netflix

- recreate the popular streaming platform Netflix using React.js and Firebase. Leveraging React's component-based architecture, we're designing a user-friendly interface with features like dynamic content loading and smooth navigation. Firebase is utilized for real-time data storage, authentication, and hosting, ensuring a seamless and secure user experience. 

## 🚀 About Me

Hi, I'm Shubham Rajput, a passionate developer currently focused on learning TypeScript and building projects with React.js. With a keen interest in front-end development, I'm constantly exploring new technologies and frameworks to enhance my skills and create engaging user experiences. Throug

## Usage/Examples

```javascript
import Component from 'my-project'

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
        
          const {uid,email,displayName,photoURL} = user;
          dispatch(addUser({uid: uid , email: email , displayName: displayName,photoURL: photoURL}));
        } else {
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

```



## API Reference

#### Firebase API


| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Authentication

```http
const auth = firebase.auth();

 auth.createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed up successfully
    const user = userCredential.user;
  })
  .catch((error) => {
    // Handle errors
    const errorCode = error.code;
    const errorMessage = error.message;
  });
```
### Demo 
- coming Soon