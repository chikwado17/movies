import React from 'react';
import { Link } from 'react-router-dom';
import './Styles.css';
import unamed from '../../images/unnamed.png';

const PopularMovieListItems = ({movie}) => {
    return (
        <>
            <Link to={`/tvDetails/${movie.id}-${movie.name}`} className="card" style={{width: '10rem', height: '15rem'}}>
                <img style={{width:'10rem'}} className="card-img-top" src={
                    movie.poster_path === null
                    ? unamed
                    : `https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`
                }  
                alt="logo 1" />
            </Link>
            <Link to={`/tvDetails/${movie.id}-${movie.name}`} className="movie__p-2 mt-2"><b>{movie.original_title || movie.name}</b></Link>
            <p className="movie__date"><b>{movie.release_date || movie.first_air_date}</b></p>
        </>
    )
}

export default PopularMovieListItems;
