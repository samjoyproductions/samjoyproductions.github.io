import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = props => (
    <div className="Header">
        <h1 className="Header__Title">sam joy productions</h1>
        <div className="Header__Menu">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <a href="https://samueljoy.zenfolio.com/" target="_blank" rel="noopener noreferrer">Portfolio</a>
            <Link to="contact">Contact</Link>
        </div>
        <div className="Header__Subtitle">web developer, photographer, and musician</div>
    </div>
    
);

export default Header;
