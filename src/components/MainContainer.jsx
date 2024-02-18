import React from 'react'
import {useSelector} from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
function MainContainer() {

    const movies = useSelector((state) => state.movies?.nowPlayingMovies)
    
    if (!movies) return
        
    const mainMovies = movies[Math.floor(Math.random() * 20) + 1];
    const {original_title,overview ,id } = mainMovies;
  return (
    <div>
        <VideoTitle 
         title={original_title} overview={overview} /> 
        <VideoBackground movieId={id} />
    </div>
  )
}
export default MainContainer
