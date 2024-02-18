import React from 'react'
import { API_OPTIONS } from '../utils/constant'
import { useEffect } from 'react';
import {useDispatch} from 'react-redux'
import { addTrailerVideo } from '../store/movieSlice';
import {useSelector} from 'react-redux'
// need movie id for api call 
function VideoBackground({movieId}) {

    const trailerVideo = useSelector(state => state.movies?.trailerVideo)
    const dispatch = useDispatch();

    
    const getMovieVideos = async () =>{
    const data =await fetch("https://api.themoviedb.org/3/movie/" + movieId +"/videos?language=en-US", API_OPTIONS);
    const json = await data.json();

    const filterData = json.results.filter((video) => video.type === 'Trailer')
    const trailer = filterData.length ? filterData[0] : json.results[0];
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
  return (
    <div className=" w-screen">
    <iframe
    className="w-screen aspect-video"
    src={
    "https://www.youtube.com/embed/"+
    trailerVideo?.key +
    "?autoplay=1&mute=1&controls=0&showinfo=1&loop=1"
  }
  title="YouTube video player"
  allow="accelerometer; autoplay ; encrypted-media; gyroscope; picture-in-picture"
></iframe>
  </div>
  )
}
export default VideoBackground
