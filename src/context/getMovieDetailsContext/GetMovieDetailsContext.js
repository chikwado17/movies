import React, { createContext, useState } from 'react';
import axios from 'axios';

export const GetMovieDetailsContext = createContext();


const GetMovieDetailsContextProvider = ({children}) => {

    const [loading, setLoading] = useState(false);

    const [movieDetails, setMovieDetails] = useState([]);
    const [movieCast, setMovieCast] = useState([]);
    const [movieView, setMovieView] = useState([]);
    const [tvView, setTvView] = useState([]);
    const [tvDetails, setTvDetails] = useState([]);


    const getMoviesDetails = async (id) => {
        setLoading(true);
         const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=6817ce4efd7fa06447615a31f75742e4&append_to_response=videos`);

        setMovieDetails(response.data);
     
        setLoading(false);
    }


    const getMoviesView = async (video) => {
        setLoading(true);
         const resp = await axios.get(`https://api.themoviedb.org/3/movie/${video}?api_key=6817ce4efd7fa06447615a31f75742e4&append_to_response=videos`);

         setMovieView(resp.data.videos.results);
        setLoading(false);
    }

    

    //getting movie cast
    const getMoviesCast = async (id) => {
        setLoading(true);
         const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=6817ce4efd7fa06447615a31f75742e4&append_to_response=videos`);

         setMovieCast(response.data.cast);
        setLoading(false);
    }
    

    const getTvDetails = async (id) => {
        setLoading(true);
         const response = await axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=6817ce4efd7fa06447615a31f75742e4&append_to_response=videos`);

         setTvDetails(response.data);
        setLoading(false);
    }


    const getTvView = async (video) => {
        setLoading(true);
         const resp = await axios.get(`https://api.themoviedb.org/3/movie/${video}?api_key=6817ce4efd7fa06447615a31f75742e4&append_to_response=videos`);

         setTvView(resp.data.videos.results);
        setLoading(false);
    }
    

    return (
        <GetMovieDetailsContext.Provider value={{getMoviesDetails, tvView, getTvView, movieView, getTvDetails, getMoviesView, tvDetails, getMoviesCast, movieCast, movieDetails, loading}}>
            {children}
        </GetMovieDetailsContext.Provider>
    )
}

export default GetMovieDetailsContextProvider;
