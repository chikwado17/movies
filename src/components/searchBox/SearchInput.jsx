import React, { useEffect, useRef, useState } from 'react';
import './SearchInput.css';
import img1 from '../../images/1622501033_maxresdefault.jpg';
import img2 from '../../images/another.jpg';
import img3 from '../../images/black-widow-marvel-poster-crop.jpg';
import img11 from '../../images/f9.jpg';
import img4 from '../../images/maxresdefault.jpg';
import img5 from '../../images/Nobody.jpg';
import img6 from '../../images/rock.jpg';
import img7 from '../../images/scale.jpeg';
import img8 from '../../images/spce.jpg';
import img9 from '../../images/stowaway-netflix.jpg';
import img10 from '../../images/Stowaway3.jpg';



const SearchInput = () => {

    const photos = [img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11]
    const [search, setSearch] = useState('');
    const [images, setImages] = useState(photos);

    useEffect(() => {
        let res = Math.floor(Math.random() * images.length)
        setImages(images[res])
        //eslint-disable-next-line
    },[])
   
       
    
    const handleInputSubmit = (e) => {
        e.preventDefault();
        console.log(search);
        setSearch('');
    }


    const JumboTron = {
        backgroundImage: `linear-gradient(to bottom,rgba(16, 153, 255, 0.7),rgba(179, 225, 255, 0.164)),url(${images})`,
    }
    return (
        <div className="container container-mobile">
            
            <div className="jumbotron" style={JumboTron}>
                <h1>Welcome.</h1>
                <h2 className="mb-5">Millions of movies, TV shows and people to discover. Explore now.</h2>

                <form onSubmit={handleInputSubmit} className="mt-5 mb-5 mobile-form">
                    <div className="input-group">
                        <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" className="form-control search-form desktop-input" placeholder="Search for movies, tv shows...." />
                        <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" className="form-control search-form-mobile mobile-input" placeholder="Search...." />
                        <div className="input-group">
                            <button className="btn btn-primary search-btn" type="submit">Search</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SearchInput;


