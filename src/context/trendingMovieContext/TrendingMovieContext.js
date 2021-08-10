import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';
export const TrendingMovieContext = createContext();

const TrendingMovieContextProvider = ({children}) => {

    const [loading, setLoading] = useState(false);
    const [popularMovies, setPopularMovies] = useState([]);

    const getPopularMovies = async () => {
        setLoading(true);
        const response = await axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=6817ce4efd7fa06447615a31f75742e4&language=en-US&page=1`);
        setPopularMovies(response.data.results);
        setLoading(false);
    }

    useEffect(() => {
        getPopularMovies();
    },[]);
    

    return (
        <TrendingMovieContext.Provider value={{popularMovies, loading}}>
            {children}
        </TrendingMovieContext.Provider>
    )
}

export default TrendingMovieContextProvider;
