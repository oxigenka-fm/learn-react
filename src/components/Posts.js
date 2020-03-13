import React from 'react';

import Post from './Post';

export default function Posts({ posts, error }) {
  const items = posts && posts.map(post => <div key={post.id}><Post post={post}/></div>)
    || error
    || 'No posts found';
  return (
    <div className="uk-grid uk-child-width-1-2@s uk-child-width-1-3@m">
      {items}
    </div>
  );
}
