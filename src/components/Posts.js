import React from 'react';
import useApp from '../hooks/useApp';
import usePosts from '../hooks/usePosts';
import Post from './Post';

export default function Posts() {
  const { controls } = useApp();

  const params = [];

  params.push(`_limit=${controls.limit}`);

  if (controls.currentPage >= 1) {
    params.push(`_page=${controls.currentPage}`);
  }

  if (controls.order) {
    params.push('_sort=id');
    params.push(`_order=${controls.order}`);
  }

  if (controls.search) {
    params.push(`q=${encodeURIComponent(controls.search)}`);
  }

  const [{ data, error }] = usePosts(params);

  let items;

  if (data) {
    items = data.map(post => <div key={post.id}><Post post={post}/></div>);
  } else if (error) {
    items = <div>{error}</div>;
  } else {
    items = 'No posts found';
  }

  return (
    <div className="uk-grid uk-child-width-1-2@s uk-child-width-1-3@m">
      {items}
    </div>
  );
}
