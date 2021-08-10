import React from 'react';
import Spinner from '../spinner/Spinner';
import PopularMovieListItems from './PopularMovieListItems';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import './Styles.css';
import { useContext } from 'react';
import { TrendingMovieContext } from '../../context/trendingMovieContext/TrendingMovieContext';

const PopularMovieList = () => {

   const { loading, popularMovies } = useContext(TrendingMovieContext);

    if (loading) {
        return <Spinner />
    } else {
        return (
            <div className="container mt-4">
                <div>
                    <h3 style={{fontWeight:900}} className="mb-4">Trending</h3>
                    <Splide
                        className="mobie-desk"
                        options={{
                            rewind: true,
                            width: 1300,
                            perPage: 2,
                            perMove: 1,
                            gap: '1rem',

                            
                        }}
                        >
                        {!loading && popularMovies &&
                            popularMovies.map((movie) => (
                                <SplideSlide key={movie.id}>
                                    <PopularMovieListItems movie={movie} />
                                </SplideSlide>
                            )
                            )}
                    </Splide>
                    <Splide
                        className="mobie-mobile"
                        options={{
                            rewind: true,
                            width: 1300,
                            perPage: 7,
                            perMove: 1,
                            gap: '1rem',

                            
                        }}
                        >
                        {!loading && popularMovies &&
                            popularMovies.map((movie) => (
                                <SplideSlide key={movie.id}>
                                    <PopularMovieListItems movie={movie} />
                                </SplideSlide>
                            )
                            )}
                    </Splide>
                </div>
            </div>
        )
    }
}

export default PopularMovieList;
