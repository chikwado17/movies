import React from 'react';
import MovieList from './components/movies/MovieList';
import Navbar from './components/nav/Navbar';
import PopularMovieList from './components/populaMovies/PopularMovieList';
import SearchInput from './components/searchBox/SearchInput';
import VideosliderList from './components/videoSlider/VideosliderList';
import PopularMovieContextProvider from './context/popularMovieContext/PopularMovieContext';
import TrailerMoviesContextProvider from './context/trailerMoviesContext/TrailerMoviesContext';
import TrendingMovieContextProvider from './context/trendingMovieContext/TrendingMovieContext';

const App = () => {

  return (
      <div>
          <Navbar />
          <SearchInput />
          <PopularMovieContextProvider>
            <TrailerMoviesContextProvider>
              <TrendingMovieContextProvider>
                <div style={{paddingTop:'10px', paddingBottom: '5px'}}>
                  <MovieList />
                </div>
                <div style={{background:'#F2F2F2', paddingTop:'5px', paddingBottom: '20px'}}>
                  <VideosliderList />
                </div>
                <div style={{paddingTop:'20px', paddingBottom: '5px'}}>
                  <PopularMovieList />
                </div>
              </TrendingMovieContextProvider>
            </TrailerMoviesContextProvider>
          </PopularMovieContextProvider>
      </div>
  );
}

export default App;
