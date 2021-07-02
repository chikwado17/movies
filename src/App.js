import axios from 'axios';
import React, { useEffect, useState } from 'react';
import MovieList from './components/movies/MovieList';
import Navbar from './components/nav/Navbar';
import SearchInput from './components/searchBox/SearchInput';

const App = () => {

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);


  const getMovies = async () => {
    setLoading(true);
    const response = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=6817ce4efd7fa06447615a31f75742e4`);
    console.log(response.data.results);
    setMovies(response.data.results);
    setLoading(false);
  }

  useEffect(() => {
    getMovies();
  },[]);

  return (
    <div>
      <Navbar />
      <SearchInput />
      <MovieList loading={loading} movies={movies} />
    </div>
  );
}

export default App;
