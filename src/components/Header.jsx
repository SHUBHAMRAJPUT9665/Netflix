import React from 'react'

import './Header.css'

function Header() {
  return (
    <>
    <div>
      <div class="header">
        <nav>
            <img src="images/logo.png" alt="logo" class="logo" />
            <div>
                <button class="language-btn">English<img src="images/down-icon.png" alt="" /></button>
                <a href="./sign up form/index.html"><button class="sign">Sign In</button></a>
            </div>
        </nav>
        <div class="header-content">
            <h1>Unlimited movies,TV Shows and more.</h1>
            <h3>Watch anywhere. Cancel anytime.</h3>
            <p>Ready to watch? Enter your email to create or restart your membership.</p>
            
            <form action="" class="email-signup">
                <input type="email" placeholder="Email address" required />
                <button type="submit">Get Started</button>
            </form>
        </div>
    </div>

    </div>
    </>
  )
}

export default Header
