import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return(
        <nav className="fixed-top navbar navbar-expand navbar-light bg-clarity">
            <div className="container">
                <Link to="/" className="navbar-brand">
                    <img src="/assets/images/logo.png" alt="BaeJino"/>
                </Link>
                <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                    <li className="nav-item">
                        <Link to="/product" className="nav-link">
                            Product
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/palette" className="nav-link">
                            Palette
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}