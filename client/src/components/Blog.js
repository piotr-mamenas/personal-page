import React from 'react';
import Post from './Post';
import Tag from './Tag';

const Blog = () => {
  const posts = [
      { header: 'Post', body: 'Post Post' }
    ];

  return (
      <div className='row'>
        <div className='col-md-9 col-sm-12'>
          {posts.map(function(post, i){
            return <Post header={post.header} body={post.body} />;
          })}
        </div>
        <div className='col-md-3 col-sm-12'>
          <Tag />
        </div>
      </div>
  )
};

export default Blog;
