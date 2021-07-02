import React, { useState } from 'react';
import './SearchInput.css';

const SearchInput = () => {

    const [search, setSearch] = useState('');

    const handleInputSubmit = (e) => {
        e.preventDefault();

        console.log(search);

        setSearch('');
    } 

    return (
        <div className="container">
            <div className="jumbotron">
                <h1>Welcome.</h1>
                <h2 className="mb-5">Millions of movies, TV shows and people to discover. Explore now.</h2>

                <form onSubmit={handleInputSubmit} className="mt-5 mb-5">
                    <div className="input-group">
                        <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" className="form-control" placeholder="Search for movies, tv shows...." />
                        <div className="input-group-append">
                            <button className="btn btn-primary" type="submit">Search</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default SearchInput;
