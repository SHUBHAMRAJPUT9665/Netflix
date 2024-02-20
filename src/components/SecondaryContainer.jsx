import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";


function SecondaryContainer() {
  const movie = useSelector((state) => state.movies);
  // const PopularMovies = useSelector((state) => state.movies)
  return (
    movie.nowPlayingMovies && (
    <div className="bg-black">
      <div className="text-white     relative z-10">
      <MovieList title={"Now Playing"} movies={movie.nowPlayingMovies} />
      <MovieList title={"Trending Movies"} movies={movie.trendingMovies} />
      <MovieList title={"Popular Movies"} movies={movie.popularMovies} />
      <MovieList title={"Horror Movies"} movies={movie.nowPlayingMovies} />
      {/* Secondary Containeer 
      Now playing
      Trending
      Horror
      */}
     </div>
    </div>
    )
  );
}

export default SecondaryContainer;
