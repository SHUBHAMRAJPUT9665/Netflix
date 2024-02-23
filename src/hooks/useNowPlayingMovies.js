import React from 'react'
import {useDispatch} from 'react-redux'
import { addNowPlayingMovies } from '../store/movieSlice'
import { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constant'
import {useSelector} from 'react-redux'

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

    const nowPlayingMovies = useSelector((state) => state.movies.nowPlayingMovies)

    const getNowPlayingMovies = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?page=1",
        API_OPTIONS
      );
  
      const json = await data.json();
      dispatch(addNowPlayingMovies(json.results))
    };
    useEffect(() => {
      if(!nowPlayingMovies){
        getNowPlayingMovies();
      }
    }, []);
};

export default useNowPlayingMovies

