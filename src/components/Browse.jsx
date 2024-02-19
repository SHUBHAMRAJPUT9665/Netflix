import React from "react";
import SignOutHeader from "./SignOutHeader";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTrendingMovies from "../hooks/useTrendingMovies";
import Footer from './Footer'
function Browse() {
  // custom hooks for fetching movie 
  useNowPlayingMovies();
  usePopularMovies();
  useTrendingMovies();
  
  
  return (
    <>
      <SignOutHeader />
      <MainContainer />
      <SecondaryContainer />
      <Footer />      {/*

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
