import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  const ClickMovie = useSelector((state) => state.movies?.ClickTrailerMovie);

  if (!movies) return null; // Return null if movies are not available

  let mainMovie;
  if (ClickMovie) {
    
    mainMovie = ClickMovie;
  } else {
    mainMovie = movies[12];
  }

  const { original_title, overview, id } = mainMovie;

  return (
    <div className="bg-black md:pt-0">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
