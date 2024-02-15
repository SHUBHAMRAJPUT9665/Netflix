import React from 'react'
import {useSelector} from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
function MainContainer() {

    const movies = useSelector((state) => state.movies?.nowPlayingMovies)
    
    if (!movies) return
        
    const mainMovies = movies[4];
    console.log(mainMovies);

    const {original_title,overview } = mainMovies;
  return (
    <div>
        <VideoTitle title={original_title} overview={overview} />
        <VideoBackground />
    </div>
  )
}
export default MainContainer
