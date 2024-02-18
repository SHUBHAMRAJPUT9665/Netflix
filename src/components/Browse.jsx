import React from "react";
import SignOutHeader from "./SignOutHeader";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
function Browse() {
  // custom hooks for fetching movie 
  useNowPlayingMovies();
  usePopularMovies();
  
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
