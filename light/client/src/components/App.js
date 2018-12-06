import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Home from './Home';
import Blog from './Blog';
import About from './About';
import Navbar from './Navbar';

const App = () => {
  return (
    <div id='app'>
      <Navbar></Navbar>
      <Router>
        <div>
          <Route path="/" exact component={Home} />
          <Route path="/blog" component={Blog} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    </div>
  );
};

export default App;
