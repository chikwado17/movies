import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';



const VideoSliderItem = ({movie}) => {
    return (
       <div>
           <Link to={`/movieDetails/${movie.id}-${movie.original_title}`} className="card" style={{width: '10rem', height: '15rem'}}>
                <img style={{width:'10rem'}} className="card-img-top" src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`} alt="logo 1" />
            </Link>
            <Link to={`/movieDetails/${movie.id}-${movie.original_title}`} className="movie__p-2"><b>{movie.original_title || movie.name}</b></Link>
            <p className="movie__date"><b>{movie.release_date || movie.first_air_date}</b></p>
       </div>
    )
}

export default VideoSliderItem;
