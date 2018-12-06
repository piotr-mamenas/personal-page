import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-md navbar-light fixed-top bg-light">
        <span class="navbar-brand">Logo</span>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-collapse" aria-controls="navbar-collapse" aria-expanded="false" aria-label="Toggle Navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbar-collapse">
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
    </nav>
  );
};

export default Navbar;
