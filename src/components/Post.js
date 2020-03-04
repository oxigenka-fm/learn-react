import React from "react";

export default function Post({ post }) {
  console.log(post.id,post.title,post.body);
  return (
    <div className="uk-card uk-card-default uk-margin-medium-bottom">
      <div className="uk-card-header">
        <h3 className="uk-card-title uk-margin-remove-bottom uk-flex uk-flex-middle uk-flex-between">
          {post.title} <a href="/" className="uk-icon-link" data-uk-icon="heart" />
        </h3>
      </div>
      <div className="uk-card-body">
        <p>{post.body}</p>
      </div>
      <div className="uk-card-footer">
        <a href="/" className="uk-button uk-button-text">
          Read more
        </a>
      </div>
    </div>
  );
}
