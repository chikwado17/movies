import React, { createContext, useState } from 'react';
import axios from 'axios';

export const SearchContext = createContext();

const SearchContextProvider = ({ children }) => {

    const [loading, setLoading] = useState(false);
    const [searchItem, setSearchItem] = useState([]);

    const getMoviesSearch = async (val) => {
        setLoading(true);
        const response = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${val}&api_key=6817ce4efd7fa06447615a31f75742e4&with_networks=213`);
        
        setSearchItem(response.data.results);
        setLoading(false);
    }
    
    //   useEffect(() => {
    //     getMoviesSearch();
    //   },[]);

    return (
        <SearchContext.Provider value={{getMoviesSearch, searchItem, loading}}>
            {children}
        </SearchContext.Provider>
    )
}

export default SearchContextProvider;
