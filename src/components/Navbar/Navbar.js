import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
        <li>
          <Link to="/" onClick={() => setIsOpen(false)}>[Index]</Link>
        </li>
        <li>
          <Link to="/work" onClick={() => setIsOpen(false)}>[Work]</Link>
        </li>
        <li>
          <Link to="/contact" onClick={() => setIsOpen(false)}>[Contact]</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
