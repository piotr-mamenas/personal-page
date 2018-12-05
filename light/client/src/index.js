import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div id='app'>
      <nav class="navbar fixed-top bg-faded">
        <a class="navbar-brand" href="#">Logo</a>
      </nav>
    </div>
  );
};

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
