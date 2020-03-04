import React from 'react';

import Post from './Post';

export default function Posts({ posts }) {

  return (
    <div className="uk-grid uk-child-width-1-2@s uk-child-width-1-3@m">
      {posts.map(post => <Post key={post.id} post={post}/>)}
    </div>
  );
}
