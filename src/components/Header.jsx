import React from 'react'

import './Header.css'
import Main from './Main'
import {useNavigate} from 'react-router-dom';

function Header() {

  const navigate = useNavigate();
  return (
    <>
    <div>
      <div class="header" className='px-12 '>
        <nav>
            <img src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" className='h-10 mr-3 ' alt="logo" class="logo" />
            <div>
                <button class="language-btn">English<img src="images/down-icon.png" alt="" /></button>
                <button  class="sign"><span onClick={() => navigate('/Login')} className='font-bold'>Login IN</span></button>
            </div>
        </nav>
    </div>
    </div>
    </>
  )
}
export default Header
