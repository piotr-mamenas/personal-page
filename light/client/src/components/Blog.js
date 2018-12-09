import React from 'react';

const Blog = () => {
  return (
    <div className='row'>
      <div className='col-md-6 col-sm-12'>
        <div className='card'>
          <div className='card-body'>
            <p className='card-text'>Post</p>
          </div>
        </div>
      </div>
      <div className='col-md-6'>
        <div className='card' style={{ width: 100 }}>
          <div className='card-body'>
            <p className='card-text'>Tags Card</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
