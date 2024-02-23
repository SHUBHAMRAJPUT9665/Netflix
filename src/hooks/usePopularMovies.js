import React from 'react'
import {useDispatch} from 'react-redux'
import { addPopularMovies } from '../store/movieSlice'
import { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constant'
import {useSelector} from 'react-redux'

const usePopularMovies = () => {
    const dispatch = useDispatch();
    const nowPopularMovies = useSelector((state) => state.movies.popularMovies)


    const getPopularMovies = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/popular?page=1",
        API_OPTIONS
      );

      const json = await data.json();
      dispatch(addPopularMovies(json.results))
    };
  
    useEffect(() => {
      if(!nowPopularMovies){
        getPopularMovies();
      }
    }, []);
};
export default  usePopularMovies

