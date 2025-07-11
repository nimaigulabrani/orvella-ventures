import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const location = useLocation();

    return (
        <nav className="navbar">
            <h1 className="logo">Orvella Ventures</h1>
            <div className="nav-links">
                <Link to="/" className={location.pathname === "/" ? "active" : ""}>Home</Link>
                <Link to="/projects" className={location.pathname === "/projects" ? "active" : ""}>Projects</Link>
                <Link to="/about" className={location.pathname === "/about" ? "active" : ""}>About</Link>
                <Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>Contact</Link>
            </div>
        </nav>
    );
}

export default Navbar;
