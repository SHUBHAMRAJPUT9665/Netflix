import React from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import SignOutHeader from "./SignOutHeader";
import Footer from "./Footer";
import lang from "../utils/languageConstant";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

import "./Main.css";

function Main() {

    
  const navigate = useNavigate();
  const langKey = useSelector((state) => state.config.lang);

  return (
    <div>
      <div class="header">
        <SignOutHeader />
        <div class="header-content">
          <h1 className="text-2xl  mx-auto ">{lang[langKey].headerh1}</h1>
          <h3 className="text-2xl mt-5">{lang[langKey].headerh3}</h3>
          <p className="text-2xl font-semibold">{lang[langKey].headerp}</p>

          <form action="" class="email-signup">
            <input type="email" placeholder="Email address" required />
            <button
              onClick={() => {
                toast.error("please sign up");
              }}
              className=""
              type="submit"
            >
              {lang[langKey].headerbutton}
            </button>
          </form>
        </div>
      </div>

      <div class="features">
        <div class="row">
          <div class="text-col">
            <h2>{lang[langKey].featureh2}</h2>
            <p>{lang[langKey].featurep}</p>
          </div>
          <div class="img-col">
            <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" />
          </div>
        </div>
        <div class="row">
          <div class="img-col" id="img-1">
            <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" />
          </div>
          <div class="text-col">
            <h2>{lang[langKey].feature2h2}</h2>
            <p>{lang[langKey].feature2p}</p>
          </div>
        </div>

        <div class="row">
          <div class="text-col">
            <h2>{lang[langKey].feature3h2}</h2>
            <p>{lang[langKey].feature3p}</p>
          </div>
          <div class="img-col">
            <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png" />
          </div>
        </div>

        <div class="row">
          <div class="img-col">
            <img src="https://occ-0-2164-1490.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d" />
          </div>
          <div class="text-col">
            <h2>{lang[langKey].feature4h2}</h2>
            <p>{lang[langKey].feature4p}</p>
          </div>
        </div>
      </div>

      <div class="faq">
        <h2>{lang[langKey].faqh2}</h2>
        <ul class="accordion">
          <li>
            <input type="radio" name="accordion" id="first" />
            <label for="first">{lang[langKey].faq1label}</label>
            <div class="content">
              <p>{lang[langKey].faq1p}</p>
            </div>
          </li>
          <li>
            <input type="radio" name="accordion" id="second" />
            <label for="second">{lang[langKey].faq2label}</label>
            <div class="content">
              <p>{lang[langKey].faq2p}</p>
            </div>
          </li>

          <li>
            <input type="radio" name="accordion" id="third" />
            <label for="third">{lang[langKey].faq3label}</label>
            <div class="content">
              <p>{lang[langKey].faq2p}</p>
            </div>
          </li>

          <li>
            <input type="radio" name="accordion" id="fourth" />
            <label for="fourth">{lang[langKey].faq4label}</label>
            <div class="content">
              <p>{lang[langKey].faq4p}</p>
            </div>
          </li>

          <li>
            <input type="radio" name="accordion" id="fifth" />
            <label for="fifth">{lang[langKey].faq5label}</label>
            <div class="content">
              {lang[langKey].faq5pl}
              <p></p>
            </div>
          </li>

          <li>
            <input type="radio" name="accordion" id="sixth" />
            <label for="sixth">{lang[langKey].faq6label}</label>
            <div class="content">
              <p>{lang[langKey].faq6p}</p>
            </div>
          </li>
        </ul>

        <small>{lang[langKey].small}</small>
        <form action="" class="email-signup">
          <input type="email" placeholder="Email address" required />
          <button type="submit">{lang[langKey].headerbutton}</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Main;
