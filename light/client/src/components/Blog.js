import React from 'react';
import Post from './Post';
import Tag from './Tag';

const Blog = () => {
  const posts = ["One","Two","Three"];
  const tags = ["One","Two","Three"];

  return (
      <div className='row'>
        <div className='col-md-9 col-sm-12'>
          <Post />
        </div>
        <div className='col-md-3 col-sm-12'>
          <Tag />
        </div>
      </div>
  )
};

export default Blog;
