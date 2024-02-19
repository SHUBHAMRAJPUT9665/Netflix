import React from 'react'
import {useDispatch} from 'react-redux'
import { addTrendingMovies } from '../store/movieSlice'
import { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constant'

const useTrendingMovies = () => {
    const dispatch = useDispatch();
    const getTrendingMovies = async () => {
      const data = await fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US',API_OPTIONS);
  
      const json = await data.json();
      dispatch(addTrendingMovies(json.results))
    };
  
    useEffect(() => {
      getTrendingMovies();
    }, []);
};

export default useTrendingMovies

