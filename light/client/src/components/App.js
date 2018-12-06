import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Home from './components/Home';
import Blog from './components/Blog';
import About from './components/About';

const App = () => {
  return (
    <div id='app'>
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
      <BrowserRouter>
        <Route path="/" exact component={Home} />
        <Route path="/blog" exact component={Blog} />
        <Route path="/about" exact component={About} />
      </BrowserRouter>
    </div>
  );
};

export default App;
