import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utils/constant';
import { addTrailerVideo } from '../store/movieSlice';

function VideoBackground({ movieId }) {
    const dispatch = useDispatch();
    const trailerVideo = useSelector(state => state.movies?.trailerVideo);
    const ClickMovie = useSelector(state => state.movies?.ClickTrailerMovie);

    const getMovieVideos = async (movieId) => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS);
        const json = await data.json();

        const filterData = json.results.filter(video => video.type === 'Trailer');
        const trailer = filterData.length > 0 ? filterData[0] : null;
        dispatch(addTrailerVideo(trailer));
    };

    useEffect(() => {
            getMovieVideos(movieId);
        
    }, []);

    useEffect(() => {
        if (ClickMovie) {
            getMovieVideos(ClickMovie);
        }
    }, [ClickMovie]);

    return (
        <div className="w-screen">
                <iframe
                    className="w-screen aspect-video"
                    src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&controls=0&showinfo=1&loop=1`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
        </div>
    );
}

export default VideoBackground;
