import React from 'react'
import { Image_Cdn } from '../utils/constant'

function MovieCart({posterPath}) {
  return (
    <div className='flex w-40 hover:cursor-pointer  '>
      <img 
      className='px-2 py-1'
      src={Image_Cdn+posterPath}
      alt="Movie Cart" 
    />    </div>
  )
}

export default MovieCart