import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <h2>edoardoababei2003@gmail.com</h2>
                <button className="menu-toggle" onClick={toggleMenu}>
                    ☰
                </button>
            </div>
            <ul className={`menu ${isOpen ? 'open' : ''}`}>
                <li>Index</li>
                <li>Work</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
};

export default Navbar;
