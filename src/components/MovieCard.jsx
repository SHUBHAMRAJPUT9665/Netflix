import React from 'react'
import { Image_Cdn } from '../utils/constant'
import  {useDispatch} from 'react-redux'
import { addClickMovie } from '../store/movieSlice';

function MovieCart({posterPath,id}) {
  const dispatch = useDispatch();
  return (
    <div className='flex w-40 items-center justify-center transition duration-300 hover:cursor-pointer  hover:scale-105'>
    <img 
      onClick={() => dispatch(addClickMovie(id)) }
      className='px-2 py-1 transition duration-300 transform hover:scale-105'
      src={Image_Cdn + posterPath}
      alt="Movie Cart" 
    />
    
  </div>
  

  )
}
export default MovieCart


