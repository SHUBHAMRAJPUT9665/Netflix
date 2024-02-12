import React from "react";
import Header from "./Header";
import "./Login.css";
import { useState } from "react";
import { checkValidData } from "../utils/validate";
import { useRef } from "react";

function Login() {
  const [isSignInForm, setisSignInForm] = useState(true);
  const [errorMessage, seterrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);


  function handleButtonClick(){
    // validating form data entered by user
    const msg = checkValidData(email.current.value,password.current.value)
    seterrorMessage(msg)
   
    }

  const toggle = () => {
    setisSignInForm(!isSignInForm);
  };

  return (
    <div className="header">
      {/* // header component */}
        <Header />
      <div>
        <form onSubmit={(e) => e.preventDefault()}
          action=""
          className="w-full h-1/2 pt-5 sm:pt-12 sm:w-1/2 md:w-1/2  lg:w-1/3 xl:w-1/4 absolute bg-[rgba(0,0,0,0.7)] p-4 sm:p-8 lg:p-12  sm:my-33 mx-auto right-0 left-0 rounded-lg bg-opacity-70">
          <h1 className="text-white font-bold sm:text-2xl  text-3xl pb-4">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          <p className="text-red-600 p-2 font-bold text-lg">{errorMessage}</p>
          {!isSignInForm && (
            <input
              ref={name}
              type="name"
              placeholder="name"
              className="p-3 m-2 bg-gray-700 w-full rounded-md"
            />
          )}
          <input
           ref={email}
            type="email"
            placeholder="Email"
            className="p-3 m-2 bg-gray-700 w-full rounded-md"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-3 m-2 w-full bg-gray-700 rounded-md"
          />
          <button
            onClick={handleButtonClick}
            type="submit"
            className="mt-4 py-2 w-full bg-red-700 rounded-lg"
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p className="py-4 text-white text-center pb-3 hover:cursor-pointer" onClick={toggle}>
            {isSignInForm
              ? "New to Netflix? Sign Up Now"
              : "Already registered? Sign In Now"}
          </p>
        </form>
      </div>
    </div>
  );
}
export default Login;
