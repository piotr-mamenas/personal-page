import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './Home';
import Blog from './Blog';
import About from './About';
import Navbar from './Navbar';

const App = () => {
  return (
    <div className='container container-fluid' id='app'>
        <Router>
        <div>
          <Navbar />
          <div id='app-body'>
            <Route path='/' exact component={Home} />
            <Route path='/blog' component={Blog} />
            <Route path='/about' component={About} />
          </div>
        </div>
        </Router>
    </div>
  );
};

export default App;
