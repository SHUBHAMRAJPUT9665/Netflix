import React from 'react';
import './Main.css'

function Footer() {
  return (
<div class="footer">
        <h2>Questions? call 000-000-000</h2>

        <div class="row">
            <div class="col">
                <a href="#">FAQ</a>
                <a href="#">Investor Relations</a>

                <a href="#">Speed Test</a>
                <a href="#">Privacy</a>
            </div>
            <div class="col">
                <a href="#">Help Center</a>
                <a href="#">Legal Notice</a>

                <a href="#">Jobs</a>
                <a href="#">Cookies</a>
            </div>
            <div class="col">
                <a href="#">Account</a>
                <a href="#">Ways to watch</a>

                <a href="#">Corporate Informations</a>
                <a href="#">Only on Netflix</a>
            </div>

            <div class="col">
                <a href="#">media Center</a>
                <a href="#">Terms of Use</a>

                <a href="#">Contact us</a>
            </div>
        </div>
        <button class="language-btn">English<img src="images/down-icon.png" alt=""/></button>
        <p class="Copyright-text">netflix India Developed by <span className='text-white font-semibold text-2xl'>Shubham Rajput</span></p>
    </div>
  );
}

export default Footer;
