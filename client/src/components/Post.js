import React from 'react';

const Post = params => {
  return (
    <div className='card post-card'>
      <div className='card-body'>
        <h5 class='card-title'>{ params.header }</h5>
        <p className='card-text'>{ params.body }</p>
      </div>
    </div>
  )
};

export default Post;
