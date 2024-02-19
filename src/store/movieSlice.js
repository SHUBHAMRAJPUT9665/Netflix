import {createSlice} from '@reduxjs/toolkit'



const movieSlice = createSlice({
    name: 'movies',
    initialState: {
        nowPlayingMovies: null,
        trailerVideo: null,
        popularMovies: null,
        trendingMovies: null,
    },

    reducers: {
        addNowPlayingMovies: (state,action) =>{
            state.nowPlayingMovies = action.payload;
        },
        addTrailerVideo: (state,action)=>{
            state.trailerVideo = action.payload;
        },
        addPopularMovies: (state,action) =>{
            state.popularMovies = action.payload;
        },
        addTrendingMovies:(state,action) =>{
            state.trendingMovies = action.payload;
        }
        
    }
});


export const {addNowPlayingMovies,addTrailerVideo , addPopularMovies,addTrendingMovies} = movieSlice.actions;

export default movieSlice.reducer;