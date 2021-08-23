import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { SearchContext } from '../../context/searchContext/SearchContext';
import './SearchInput.css';

const SearchInput = () => {

    const [movie, setMovie] = useState([]);
    const [search, setSearch] = useState('');
    const history = useHistory();

   const { getMoviesSearch } = useContext(SearchContext);

    const getDg = async () => {
        const res = await axios.get("https://api.themoviedb.org/3/discover/tv?api_key=6817ce4efd7fa06447615a31f75742e4&with_networks=213");
        setMovie(
            res.data.results[
                Math.floor(Math.random() * res.data.results.length - 1)
            ]
        )
    }

    useEffect(() => {
        getDg();
        //eslint-disable-next-line
    },[])
   
    
    const handleInputSubmit = (e) => {
        e.preventDefault();
       
        if(search === '') {
            
        }else {
            getMoviesSearch(search);

            history.push({
            pathname: '/search',
            search: `?q=${search}`
            });
        }
      
        setSearch('');
    }
  

    const JumboTron = {
        backgroundSize: "cover",
        backgroundImage: `linear-gradient(to bottom,rgba(16, 153, 255, 0.7),rgba(179, 225, 255, 0.164)),url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
        backgroundPosition: "center center"
    }
    return (
        <div className="container container-mobile">
            
            
            <div className="jumbotron" style={JumboTron}>
                <h1>Welcome.</h1>
                <h2 className="mb-5">Millions of movies, TV shows and people to discover. Explore now.</h2>

                <form onSubmit={handleInputSubmit} className="mt-5 mb-5 mobile-form">
                    <div className="input-group">
                        <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" className="form-control search-form desktop-input" placeholder="Search for movies, tv shows...." />
                        <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" className="form-control search-form-mobile mobile-input" placeholder="Search...." />
                        <div className="input-group">
                            <button className="btn btn-primary search-btn" type="submit"  data-toggle="modal" data-target={`${search}` === '' ? '#exampleModal' : '' }>Search</button>
                        </div>
                    </div>
                </form>
            </div>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel"><span className="badge badge-warning">Warning!!!</span></h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        Search input is Empty...
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchInput;


