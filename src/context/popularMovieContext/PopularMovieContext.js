import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
export const PopularMovieContext = createContext();


const PopularMovieContextProvider = ({children}) => {

    const [loading, setLoading] = useState(false);
    const [movies, setMovies] = useState([]);

    const getMovies = async () => {
        setLoading(true);
        const response = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=6817ce4efd7fa06447615a31f75742e4`);
        //console.log(response.data.results);
        setMovies(response.data.results);
        setLoading(false);
    }

    useEffect(() => {
        getMovies();
    },[]);
    

    return (
        <PopularMovieContext.Provider value={{movies, loading}}>
            {children}
        </PopularMovieContext.Provider>
    );
}

export default PopularMovieContextProvider;
