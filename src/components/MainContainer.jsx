import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import toast from 'react-hot-toast'


const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  const ClickMovie = useSelector((state) => state.movies?.ClickTrailerMovie);

  if (!movies) return null; // Return null if movies are not available


  
  setTimeout(function() {
    toast.success('Welcome! Enjoy');
}, 2000);

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
