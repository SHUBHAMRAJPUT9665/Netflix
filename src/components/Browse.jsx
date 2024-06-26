import React from "react";
import SignOutHeader from "./SignOutHeader";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTrendingMovies from "../hooks/useTrendingMovies";
import Footer from "./Footer";
import Search from "./Search";
import { useSelector } from "react-redux";
import useUpcomingMovies from "../hooks/useUpcomingMovies";


function Browse() {
  // custom hooks for fetching movie


  const showSearch = useSelector((state) => state.gpt.showGptSearch);

  useNowPlayingMovies();
  usePopularMovies();
  useTrendingMovies();
  useUpcomingMovies();

  return (
    <>
      <SignOutHeader />

      {showSearch ? (
        <>
          <Search />
        </>
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
          <Footer />
        </>
      )}
    </>
  );
}

export default Browse;
