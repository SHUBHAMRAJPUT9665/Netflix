import React from 'react';
import './Header.css'
import {signOut} from 'firebase/auth'
import { auth } from '../utils/firebase';
import {useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux'
import { useEffect } from 'react'
import {onAuthStateChanged } from 'firebase/auth'
import { useDispatch } from "react-redux";
import {addUser, removeUser} from '../store/userSlice'
import { toggleGptSearchView } from '../store/gptSlice';

function SignOutHeader() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);
    const handleSignout = () => {
        signOut(auth).then(() => {
            navigate('/Main');
          }).catch((error) => {
            // 
          });    
    }
    useEffect(() => {
     const unsubscribe =  onAuthStateChanged(auth, (user) => {
        if (user) {
          const {uid,email,displayName,photoURL} = user;
          dispatch(addUser({uid: uid , email: email , displayName: displayName,photoURL: photoURL}));    
          navigate('/Browse')
        } else {
          dispatch(removeUser()); 
        }
        // unsubscribe when component unmounts
       return () => unsubscribe();
      }); 
    }, []);
    const handleGptSearchClick = () => {
      // Toggle GPT Search
      dispatch(toggleGptSearchView());
    };
  return (
    <div className=''>
      {user?
     <div className='px-1 absolute z-10 flex justify-between items-center w-full'>
     <nav className='flex items-center'>
     <img  onClick={() => navigate('/Main')} src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" className='h-10 mr-3 ' alt="logo" class="logo" />
     </nav>
     <div className='cursor-pointer flex items-center'> 
         <button onClick={handleGptSearchClick} className='py-1 px-2 m-2 bg-red-700 flex justify-end rounded-md mx-4'>Search</button>
         <img onClick={() => navigate('/Browse')} className='w-5 rounded-sm ' src='src\assets\user.png' alt="" /> 
         <span onClick={handleSignout} className='font-semibold text-red-600 pr-5'>Sign out</span>
     </div>
 </div>
 
       :<div>
      <div class="header" className='px-12'>
        <nav>
            <img  onClick={() => navigate('/Main')} src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" className='h-10 mr-3 ' alt="logo" class="logo" />
            <div>
                <button class="language-btn">English<img src="images/down-icon.png" alt="" /></button>
                <button  class="sign"><span onClick={() => navigate('/Login')} className='font-bold'>Login</span></button>
            </div>
        </nav>
    </div>
    </div>}
    </div>
  );
}

export default SignOutHeader;
