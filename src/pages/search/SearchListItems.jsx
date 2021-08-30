import React from 'react';
import { Link } from 'react-router-dom';
import unnamed  from '../../images/unnamed.png';

const SearchListItems = ({searchItems}) => {
    
    return (
        <>
            <Link to={`/movieDetails/${searchItems.id}`} className="card mb-3" style={{maxWidth: '540px', textDecoration:'none', color: '#000'}}>
                <div className="row no-gutters">
                    <div className="col-md-4">
                    <img style={{width:'12rem', height:'15rem'}} className="card-img-top" src={
                        searchItems.poster_path === null
                        ? unnamed
                        : `https://www.themoviedb.org/t/p/w220_and_h330_face${searchItems.poster_path}`
                    }  
                    alt="logo 1" />
                    </div>
                    <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{searchItems.original_title}</h5>
                        <p className="card-text">{searchItems.overview.substring(0, 80).concat('...')}</p>
                        <p className="card-text"><small className="text-muted">Released Date : {searchItems.release_date}</small></p>
                    </div>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default SearchListItems;
