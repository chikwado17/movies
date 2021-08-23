import React from 'react';
import MovieList from '../components/movies/MovieList';
import VideosliderList from '../components/videoSlider/VideosliderList';
import PopularMovieList from '../components/populaMovies/PopularMovieList';
import SearchInput from '../components/searchBox/SearchInput';


const Dashboard = () => {
    return (
        <>
            <SearchInput />
            <div style={{paddingTop:'10px', paddingBottom: '5px'}}>
                <MovieList />
            </div>
            <div style={{background:'#F2F2F2', paddingTop:'5px', paddingBottom: '20px'}}>
                <VideosliderList />
            </div>
            <div style={{paddingTop:'20px', paddingBottom: '5px'}}>
                <PopularMovieList />
            </div>
        </>
    )
}

export default Dashboard;
