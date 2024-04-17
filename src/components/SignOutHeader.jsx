import React from "react";
import "./Header.css";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../store/userSlice";
import { toggleGptSearchView } from "../store/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constant";
import { changeLanguage } from "../store/configSlice";
import toast from 'react-hot-toast'


function SignOutHeader() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
   const showGptSearch = useSelector((state) => state.gpt.showGptSearch)
  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        navigate("/Main");
      })
      .catch((error) => {
        //
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/Browse");
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

  const handleLanguageChange = (e) => {
    // console.log(e.target.value);
    dispatch(changeLanguage(e.target.value));
  };
  return (
    <div>
      {user ? (
        <div className="px-1 -mt-2 absolute z-10 flex justify-between items-center w-full">
          <nav className="flex items-center">
            <img
              onClick={() => navigate("/Main")}
              src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
              className="h-10 mr-3 pt-0 "
              alt="logo"
              class="logo"
            />
          </nav>
          <div className="cursor-pointer flex items-center">
          {showGptSearch? <select
                  onChange={handleLanguageChange}
                  class="language-btn"
                  name=""
                  id=""
                >
                  {SUPPORTED_LANGUAGES.map((lang) => (
                    <option
                      className="bg-gray-900"
                      key={lang.identifier}
                      value={lang.identifier}
                    >
                      {lang.name}
                    </option>
                  ))}
                </select>:null}
            <button
              onClick={handleGptSearchClick}
              className="py-1 -mt-1 px-2 m-2 bg-red-700 flex justify-end rounded-md mx-4"
            >
              {showGptSearch?'Home':'Search'}
            </button>
            <img
              onClick={() => navigate("/Browse")}
              className="w-7  rounded-full "
              src="https://avatars.githubusercontent.com/u/113655062?v=4"
              alt=""
            />
            <span
              onClick={handleSignout}
              className="font-semibold text-red-600 pr-5"
            >
              Sign out
            </span>
          </div>
        </div>
      ) : (
        <div>
          <div class="header" className="px-12">
            <nav>
              <img
                onClick={() => navigate("/Main")}
                src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
                className="h-10 mr-3 "
                alt="logo"
                class="logo"
              />
              <div>
                <select
                  onChange={handleLanguageChange}
                  class="language-btn"
                  name=""
                  id=""
                >
                  {SUPPORTED_LANGUAGES.map((lang) => (
                    <option
                      className="bg-gray-900"
                      key={lang.identifier}
                      value={lang.identifier}
                    >
                      {lang.name}
                    </option>
                  ))}
                </select>
                {/* <button class="">
                  English
                  <img src="images/down-icon.png" alt="" />
                </button> */}
                <button class="sign">
                  <span
                    onClick={() => navigate("/Login")}
                    className="font-bold"
                  >
                    Login
                  </span>
                </button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}

export default SignOutHeader;
