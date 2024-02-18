import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies) return;
  return (
    <div className="px-3 pb-3">
      <h1 className="text-lg md:text-3xl  text-white">{title}</h1>
      <div className="flex">
        <div className="flex flex-wrap justify-between">
          {movies.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default MovieList;
