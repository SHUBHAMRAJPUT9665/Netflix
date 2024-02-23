import React from 'react'
import { Image_Cdn } from '../utils/constant'

function MovieCart({posterPath,id}) {
  return (
    <div className='flex w-40 items-center justify-center transition duration-300 hover:cursor-pointer  hover:scale-105'>
    <img 
      onClick={() => console.log(id)}
      className='px-2 py-1 transition duration-300 transform hover:scale-105'
      src={Image_Cdn + posterPath}
      alt="Movie Cart" 
    />
  </div>
  

  )
}

export default MovieCart


