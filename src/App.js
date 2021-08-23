import React from 'react';
import Navbar from './components/nav/Navbar';
import { Route, Switch } from 'react-router-dom';
import PopularMovieContextProvider from './context/popularMovieContext/PopularMovieContext';
import TrailerMoviesContextProvider from './context/trailerMoviesContext/TrailerMoviesContext';
import TrendingMovieContextProvider from './context/trendingMovieContext/TrendingMovieContext';
import Dashboard from './pages/Dashboard';
import SearchContextProvider from './context/searchContext/SearchContext';
import SearchItems from './pages/search/SearchItems';


const App = () => {

  return (
      <div>
          <Navbar />
            <PopularMovieContextProvider>
              <TrailerMoviesContextProvider>
                <TrendingMovieContextProvider>
                  <SearchContextProvider>
                    <Switch>
                      <Route path="/" exact component={Dashboard} />
                      <Route path="/search" component={SearchItems} />
                    </Switch>
                  </SearchContextProvider>
                </TrendingMovieContextProvider>
              </TrailerMoviesContextProvider>
            </PopularMovieContextProvider>
      </div>
  );
}

export default App;
