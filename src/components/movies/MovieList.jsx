import React from 'react';
import Spinner from '../spinner/Spinner';
import MovieListItems from './MovieListItems';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import './Styles.css';

const MovieList = ({ loading, movies }) => {

    if (loading) {
        return <Spinner />
    } else {
        return (
            <div className="container mt-4">
                <div>
                    <h3 className="mb-3">What's Popular</h3>
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
                        {!loading && movies &&
                            movies.map((movie) => (
                                <SplideSlide key={movie.id}>
                                    <MovieListItems movie={movie} />
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
                        {!loading && movies &&
                            movies.map((movie) => (
                                <SplideSlide key={movie.id}>
                                    <MovieListItems movie={movie} />
                                </SplideSlide>
                            )
                            )}
                    </Splide>
                </div>
            </div>
        )
    }
}

export default MovieList;
