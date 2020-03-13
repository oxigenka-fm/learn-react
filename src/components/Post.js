import React from "react";
import useApp from "../hooks/useControls";

export default function Post({ post: { id, title, body } }) {
  const { favorites } = useApp();

  const toggleFavorite = id => {
    if (favorites.data.includes(id)) {
      favorites.data.splice(favorites.indexOf(id), 1);
    } else {
      favorites.data.push(id);
    }
    favorites.setFavorites(favorites.data);
  };

  return (
    <div className="uk-card uk-card-default uk-margin-medium-bottom">
      <div className="uk-card-header">
        <h3 className="uk-card-title uk-margin-remove-bottom uk-flex uk-flex-middle uk-flex-between">
          {title}{" "}
          <a
            href="javascript:void(0)"
            className="uk-icon-link"
            data-uk-icon={favorites.data.includes(id) ? "heart-filled" : "heart"}
            onClick={e => {
              e.preventDefault();
              toggleFavorite(id);
            }}
          >
            {" "}
          </a>
        </h3>
      </div>
      <div className="uk-card-body">
        <p>{body}</p>
      </div>
      <div className="uk-card-footer">
        <a href="javascript:void(0)" className="uk-button uk-button-text">
          Read more
        </a>
      </div>
    </div>
  );
}
