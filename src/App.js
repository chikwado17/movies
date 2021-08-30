import React from 'react';
import Navbar from './components/nav/Navbar';
import { Route, Switch } from 'react-router-dom';
import PopularMovieContextProvider from './context/popularMovieContext/PopularMovieContext';
import TrailerMoviesContextProvider from './context/trailerMoviesContext/TrailerMoviesContext';
import TrendingMovieContextProvider from './context/trendingMovieContext/TrendingMovieContext';
import Dashboard from './pages/Dashboard';
import SearchContextProvider from './context/searchContext/SearchContext';
import GetMovieDetailsContextProvider from './context/getMovieDetailsContext/GetMovieDetailsContext';
import SearchItems from './pages/search/SearchItems';
import MovieDetails from './pages/MovieDetails';
import TvDetails from './pages/TvDetails';


const App = () => {

  return (
      <div>
          <Navbar />
            <PopularMovieContextProvider>
              <TrailerMoviesContextProvider>
                <TrendingMovieContextProvider>
                  <SearchContextProvider>
                    <GetMovieDetailsContextProvider>
                      <Switch>
                        <Route path="/" exact component={Dashboard} />
                        <Route path="/search" component={SearchItems} />
                        <Route path="/movieDetails/:id" component={MovieDetails}/>
                        <Route path="/tvDetails/:id" component={TvDetails}/>
                      </Switch>
                    </GetMovieDetailsContextProvider>
                  </SearchContextProvider>
                </TrendingMovieContextProvider>
              </TrailerMoviesContextProvider>
            </PopularMovieContextProvider>
      </div>
  );
}

export default App;
