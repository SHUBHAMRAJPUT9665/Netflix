import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

function SecondaryContainer() {
  const movie = useSelector((state) => state.movies);
  return (
    <div className="text-white  relative z-10">
      <MovieList title={"Now Playing"} movies={movie.nowPlayingMovies} />{" "}
      <MovieList title={"Trending Movies"} movies={movie.nowPlayingMovies} />{" "}
      <MovieList title={"Popular Movies"} movies={movie.nowPlayingMovies} />{" "}
      <MovieList title={"Horror Movies"} movies={movie.nowPlayingMovies} />{" "}


      {/* Secondary Containeer 
      Now playing
      Trending
      Horror
      */}
    </div>
  );
}

export default SecondaryContainer;
