import React from "react";
import SignOutHeader from "./SignOutHeader";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
function Browse() {
  // custom hooks for fetching movie 
  useNowPlayingMovies();
  
  return (
    <>
      <SignOutHeader />
      <MainContainer />
      <SecondaryContainer />
      {/*

      MainContainer  
         -videoBg
      SecondaryContainer
          -MovieList
             -card in 
      */ }
    </>
  );
}

export default Browse;
