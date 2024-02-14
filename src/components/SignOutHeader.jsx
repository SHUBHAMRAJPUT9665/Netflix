import React from 'react';
import './Header.css'
import {signOut} from 'firebase/auth'
import { auth } from '../utils/firebase';
import {useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux'

function SignOutHeader() {

    const navigate = useNavigate();

    const user = useSelector((state) => state.user);


    const handleSignout = () => {
        signOut(auth).then(() => {
            navigate('/Main');
            
          }).catch((error) => {
            // 
          });    
    }
  return (
    <div>
      <div>
      <div class="header" className='px-12'>
        <nav>
            <img src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" className='h-10 mr-3 ' alt="logo" class="logo" />
            <div className='cursor-pointer' onClick={handleSignout}>
                <img className='w-9 rounded-full' src={user.photoURL} alt="" />
                <p className='font-semibold text-red-600'>Sign out</p>
            </div>
        </nav>
    </div>
    </div>
    </div>
  );
}

export default SignOutHeader;
