import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1 className="header-title">My Website</h1>
      <nav className="header-nav">
        <a href="#" className="nav-link">Home</a>
        <a href="#" className="nav-link">About</a>
        <a href="#" className="nav-link">Contact</a>
      </nav>
    </header>
  );
};

export default Header;