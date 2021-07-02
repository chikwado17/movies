import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#032541', color: '#fff' }}>
            <div className="container">
                <Link className="navbar-brand" to={'/'}>MoviesCO</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to={'/'}>Movies <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={'/'}>Tv Shows</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link"to={'/'}>People</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={'/'}>More</Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to={'/'}>Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={'/'}>Join TMDb</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav >
    )
}

export default Navbar;
