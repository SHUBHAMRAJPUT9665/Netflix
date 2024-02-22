import React from 'react'
import Header from './Header';
import {useNavigate} from 'react-router-dom'
import SignOutHeader from './SignOutHeader';
import Footer from './Footer'

import './Main.css';

function Main() {

    const navigate = useNavigate();
  return (
  <div>
    <div class="header">
    <SignOutHeader/>
        <div class="header-content">
            <h1 className='text-2xl '>Unlimited movies,TV Shows and more.</h1>
            <h3 className='text-2xl mt-5'>Watch anywhere. Cancel anytime.</h3>
            <p className='text-2xl font-semibold'>Ready to watch? Enter your email to create or restart your membership.</p>
            
            <form  action="" class="email-signup">
                <input  type="email" placeholder="Email address" required />
                <button className=''  type="submit">Get Started</button>
            </form>
        </div>
    </div>

    <div class="features">
        <div class="row">
            <div class="text-col">
                <h2>Enjoy on your TV.</h2>
                <p>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.
                </p>
            </div>
            <div class="img-col">
            <img src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png' />
            </div>
        </div>
        <div class="row">
            <div class="img-col" id="img-1">
                <img src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg'/>
            </div>
            <div class="text-col">
                <h2>Download your shows to watch offline</h2>
                <p>Save your favourites easily and always have something to watch.</p>
            </div>
        </div>

        <div class="row">
            <div class="text-col">
                <h2>Watch everywhere</h2>
                <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.
                </p>
            </div>
            <div class="img-col">
                <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png"/>
            </div>
        </div>

        <div class="row">
            <div class="img-col" >
                <img src="https://occ-0-2164-1490.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d"/>
            </div>
            <div class="text-col">
                <h2>Create profiles for kids </h2>
                <p>Send children on adventures with their favourite characters in a space made just for them—free with your membership.
                </p>
            </div>
        </div>
    </div>


    <div class="faq">
        <h2>Frequently Asked Questions</h2>
        <ul class="accordion">
            <li>
                <input type="radio" name="accordion" id="first"/>
                <label for="first">What is Netflix?</label>
                <div class="content"><p>
                    Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.

You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!
                </p>
            </div>
            </li>
            <li>
                <input type="radio" name="accordion" id="second"/>
                <label for="second">How much does Netflix cost?</label>
                <div class="content"><p>
                    Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.
                </p>
            </div>
            </li>

            <li>
                <input type="radio" name="accordion" id="third"/>
                <label for="third">Where can I watch?</label>
                <div class="content"><p>Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.

                    You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.</p>
            </div>
            </li>

            <li>
                <input type="radio" name="accordion" id="fourth"/>
                <label for="fourth">How do I cancel?</label>
                <div class="content"><p>Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees start or stop your account anytime.</p>
            </div>
            </li>

            <li>
                <input type="radio" name="accordion" id="fifth"/>
                <label for="fifth">What can I watch on Netflix?</label>
                <div class="content"><p>
                    Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want. 
                </p>
            </div>
            </li>

            <li>
                <input type="radio" name="accordion" id="sixth"/>
                <label for="sixth">Is Netflix good for kids??</label>
                <div class="content"><p>The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.

                    Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.</p>
            </div>
            </li>
        </ul>

        <small>Ready to watch? Enter your email to create or restart your membership.</small>
        <form action="" class="email-signup">
            <input type="email" placeholder="Email address" required/>
            <button type="submit">Get Started</button>
        </form>
    </div>
<Footer />
  </div>
  )
}

export default Main