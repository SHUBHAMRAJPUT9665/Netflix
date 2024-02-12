import React from 'react'

import './Header.css'
import Main from './Main'

function Header() {
  return (
    <>
    <div>
      <div class="header" className='px-12 py-2'>
        <nav>
            <img src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" className='h-10 mr-3' alt="logo" class="logo" />
            <div>
                <button class="language-btn">English<img src="images/down-icon.png" alt="" /></button>
                <a href="#"><button class="sign"><span className='font-bold'>Sign In</span></button></a>
            </div>
        </nav>
    </div>
    </div>
    </>
  )
}

export default Header
