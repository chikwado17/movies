import React, { useContext, useEffect, useState } from 'react';
import { GetMovieDetailsContext } from '../context/getMovieDetailsContext/GetMovieDetailsContext';
import Spinner from '../components/spinner/Spinner';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import './styles.css';
import unamed from '../images/unnamed.png';
import ModalVideo from 'react-modal-video';
import 'react-modal-video/css/modal-video.css';



const MovieDetails = ({ match }) => {


    const [isOpen, setOpen] = useState(false);
    const { getMoviesDetails, getMoviesView, movieView, movieDetails, getMoviesCast, movieCast, loading } = useContext(GetMovieDetailsContext);

    useEffect(() => {
        getMoviesView(match.params.id);
        getMoviesDetails(match.params.id);
        getMoviesCast(match.params.id);

     
         //eslint-disable-next-line
    },[]);

    const JumboTron = {
        backgroundSize: "cover",
        backgroundImage: `linear-gradient(to bottom,rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7)),url(https://image.tmdb.org/t/p/original/${movieDetails?.backdrop_path})`,
        backgroundPosition: "center center",
        
    }

    var cast = movieCast.slice(0, 10);


    if (loading) {
        return <Spinner />
    } else {
        return (
            <div className="mt-5">
                <div className="jumbotron" style={JumboTron}>
                    <div className="container">
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                <img className="movieDetails-img" src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movieDetails.poster_path}`} alt="Nworie Chikwado Emmanuel Software Engineer" /> 
                            </div>
                            <div className="col-md-8 jumbo-text-margin">
                                <h1 className="card-title mb-4">{movieDetails.original_title}</h1>
                                
                                <span>
                                    { movieDetails.genres && movieDetails.genres.map(gene => (
                                        <span className="movieDetails--genres" key={gene.id}>
                                            {gene.name},
                                        </span>
                                    ))}
                                </span><br /><br />

                                <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId={movieView.length < 1 ? 'No vidoe' : movieView[0].key} onClose={() => setOpen(false)} />
                                <button className="btn-info" onClick={()=> setOpen(true)}>
                                    <i className="fa fa-play"><span style={{marginLeft: '10px'}}>Play Trailer</span></i>
                                </button>

                                <br /><br />
                                <cite className="card-title">{movieDetails.tagline}</cite><br />
                                <h4 className="mt-3"><b>Overview</b></h4>
                                <p className="card-text" style={{marginTop:'-10px'}}>{movieDetails.overview}</p>
                                <h6 className="card-title"><b>Runtime :</b> {movieDetails.runtime} mins</h6>
                                <h6 className="card-title"><b>Vote Count :</b> {movieDetails.vote_count}</h6>
                                <p className="card-text"><small><b>Released Date :</b> {movieDetails.release_date}</small></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <h3 className="mb-4 mt-4">Top Billed Cast</h3>  
                    <Splide
                        className="mobie-desk mb-5"
                        options={{
                            rewind: true,
                            width: 1300,
                            perPage: 2,
                            perMove: 1,
                            gap: '1rem',

                            
                        }}
                        >
                        {!loading && cast &&
                            cast.map((cas) => (
                                <SplideSlide key={cas.id}>
                                    <div className="card" style={{height:'20rem'}}>
                                    <img src={cas.profile_path === null  ? unamed : `https://image.tmdb.org/t/p/w500/${cas.profile_path}`} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <p className="card-text">{cas.name}</p>
                                        </div>
                                    </div>
                                </SplideSlide>
                            )
                            )}
                    </Splide>
                    <Splide
                        className="mobie-mobile mb-5"
                        options={{
                            rewind: true,
                            width: 1300,
                            perPage: 7,
                            perMove: 1,
                            gap: '1rem',

                            
                        }}
                        >
                        {!loading && cast &&
                            cast.map((cas) => (
                                <SplideSlide key={cas.id}>
                                    <div className="card" style={{height:'22rem'}}>
                                    <img src={cas.profile_path === null  ? unamed : `https://image.tmdb.org/t/p/w500/${cas.profile_path}`} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <p className="card-text">{cas.name}</p>
                                        </div>
                                    </div>
                                </SplideSlide>
                            )
                            )}
                    </Splide>
                </div>
            </div>
        )
     }
}

export default MovieDetails;
