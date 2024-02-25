import React from 'react';
import { Image_Cdn } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { addClickMovie } from '../store/movieSlice';

function MovieCart({ posterPath, id,  original_title ,  overview}) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addClickMovie({ id,  original_title ,  overview }));
  };

  return (
    <div className='flex w-40 items-center justify-center transition duration-300 hover:cursor-pointer hover:scale-105'>
      <img 
        onClick={handleClick}
        className='px-2 py-1 transition duration-300 transform hover:scale-105'
        src={Image_Cdn + posterPath}
        alt="Movie Cart" 
      />
    </div>
  );
}

export default MovieCart;
