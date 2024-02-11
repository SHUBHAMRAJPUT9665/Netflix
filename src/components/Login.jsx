import React from "react";
import Header from "./Header";
import "./Login.css";
import { useState } from "react";
function Login() {
  const [isSignInForm, setisSignInForm] = useState(true);

  const toggle = () => {
    setisSignInForm(!isSignInForm);
  };

  return (
    <div className="header">
      {/* // header component */}
        <Header />
      <div>
        <form
          action=""
          className="w-full h-1/2 pt-5 sm:w-3/4 md:w-1/2  lg:w-1/3 xl:w-1/4 absolute bg-[rgba(0,0,0,0.7)] p-4 sm:p-8 lg:p-12  sm:my-32 mx-auto right-0 left-0 rounded-lg bg-opacity-70"
        >
          <h1 className="text-white font-bold text-3xl pb-4">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              type="name"
              placeholder="name"
              className="p-3 m-2 bg-gray-700 w-full rounded-md"
            />
          )}
          <input
            type="email"
            placeholder="Email"
            className="p-3 m-2 bg-gray-700 w-full rounded-md"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-3 m-2 w-full bg-gray-700 rounded-md"
          />
          <button
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
