import React from 'react';

const Blog = () => {
  const posts = ["One","Two","Three"];
  const tags = ["One","Two","Three"];

  const postDom = posts.map((post) => {
    return (
      <div className='card post-card'>
        <div className='card-body'>
          <p className='card-text'>{post}</p>
        </div>
      </div>
    )
  });

  const tagsDom = tags.map((tag) => {
    return (
      <div className='card tag-card'>
        <div className='card-body'>
          <p className='card-text'>{tag}</p>
        </div>
      </div>
    )
  });

  return (
      <div className='row'>
        <div className='col-md-9 col-sm-12'>
          {{ postDom }}
        </div>
        <div className='col-md-3 col-sm-12'>
          {{ tagsDom }}
        </div>
      </div>
  )
};

export default Blog;
