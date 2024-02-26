import React from 'react'
import {useDispatch} from 'react-redux'
import { addUpcomingMovies } from '../store/movieSlice'
import { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constant'
import {useSelector} from 'react-redux'


const useUpcomingMovies = () => {
    const dispatch = useDispatch();

    const UpcomingMovies = useSelector((state) => state.movies.addUpcomingMovies)

    
    const getTrendingMovies = async () => {
      const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',API_OPTIONS);
  
      const json = await data.json();
      dispatch(addUpcomingMovies(json.results))
    };
  
    useEffect(() => {
      if(!UpcomingMovies){
        getTrendingMovies();
      }
    }, []);
};

export default useUpcomingMovies

