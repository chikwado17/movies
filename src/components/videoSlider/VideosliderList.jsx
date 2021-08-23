import React from 'react';
import Spinner from '../spinner/Spinner';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import './styles.css';
import VideoSliderItem from './VideoSliderItem';
import { useContext } from 'react';
import { TrailerMoviesContext } from '../../context/trailerMoviesContext/TrailerMoviesContext';



const VideosliderList = () => {

    const { loading, trailerMovies } = useContext(TrailerMoviesContext); 

    if (loading) {
        return <Spinner />
    } else {
        return (
            <div className="container mt-4">
                <div>
                    <h3 style={{fontWeight:900}} className="mb-5">Toprated</h3>
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
                       {!loading && trailerMovies &&
                            trailerMovies.map((movie) => (
                                <SplideSlide  key={movie.id}>
                                    <VideoSliderItem  movie={movie} />
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
                        {!loading && trailerMovies &&
                            trailerMovies.map((movie) => (
                                <SplideSlide  key={movie.id}>
                                    <VideoSliderItem  movie={movie} />
                                </SplideSlide>
                            )
                            )}
                    </Splide>
                </div>
            </div>
        )
    }
}

export default VideosliderList;
