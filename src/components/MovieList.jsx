import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies) return;
  return (
    <div className="px-3  pb-2">
      <h1 className="text-lg md:text-3xl  text-white">{title}</h1>
      <div className="flex justify-start overflow-x-scroll  " style={{ WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        <div className="flex">
          {movies.map((movie) => (
            <MovieCard key={movie.id}  posterPath={movie.poster_path} id={movie.id}  original_title={movie.original_title}  overview={movie. overview}/>
          ))}
        </div>
      </div>
    </div>
  );
};
export default MovieList;


