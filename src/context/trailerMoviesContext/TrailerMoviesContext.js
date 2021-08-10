import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
export const TrailerMoviesContext = createContext();

const TrailerMoviesContextProvider = ({children}) => {

    const [loading, setLoading] = useState(false);
    const [trailerMovies, setTrailerMovies] = useState([]);



    const getTrailersMovies = async () => {
        setLoading(true);
        const response = await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=6817ce4efd7fa06447615a31f75742e4&with_networks=213`);
        
        setTrailerMovies(response.data.results);
        setLoading(false);
      }
    
      useEffect(() => {
        getTrailersMovies();
      },[]);


    return (
        <TrailerMoviesContext.Provider value={{trailerMovies, loading}}>
            {children}
        </TrailerMoviesContext.Provider>
    )
}

export default TrailerMoviesContextProvider;
