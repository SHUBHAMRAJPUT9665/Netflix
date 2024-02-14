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
      <div>
      <div class="header" className='px-12'>
        <nav>
            <img  src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" className='h-10 mr-3 ' alt="logo" class="logo" />
            {user? <div className='cursor-pointer'>
                <img onClick={() => navigate('/Browse')} className='w-9 rounded-full' src={user.photoURL} alt="" />
                <p  onClick={handleSignout} className='font-semibold text-red-600'>Sign out</p>
            </div>
            : 
            <div>
                <button class="language-btn">English<img src="images/down-icon.png" alt="" /></button>
                <button  class="sign"><span onClick={() => navigate('/Login')} className='font-bold'>Login</span></button>
            </div>}
        </nav>
    </div>
    </div>
    </div>
  );
}

export default SignOutHeader;
