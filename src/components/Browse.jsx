import React from "react";
import SignOutHeader from "./SignOutHeader";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";

function Browse() {
  // custom hooks for fetching movie 
  useNowPlayingMovies();
  
  return (
    <>
      <SignOutHeader />
    </>
  );
}

export default Browse;
