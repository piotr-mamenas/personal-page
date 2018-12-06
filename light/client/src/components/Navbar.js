import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav class="navbar fixed-top bg-faded">
      <div class="container">
        <span class="navbar-brand">Logo</span>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link to="/" class="nav-link">Home<span class="sr-only">(current)</span></Link>
            </li>
            <li class="nav-item">
              <Link to="/blog" class="nav-link">Blog</Link>
            </li>
            <li class="nav-item">
              <Link to="/about" class="nav-link">About</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
