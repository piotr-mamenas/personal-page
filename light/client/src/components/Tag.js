import React from 'react';

const Tag = params => {
  console.log(params);
  return (
    <div className='card tag-card'>
      <div className='card-body'>
        <p className='card-text'>Tag</p>
      </div>
    </div>
  )
};

export default Tag;
