import React from 'react';

export default function LoadMore({ isLoading }) {
  return (
    <div className="uk-margin">
      <button className="uk-button uk-button-primary uk-width-1-1 uk-margin-small-bottom">
        Load more
        {isLoading && <div className="uk-margin-small-left" data-uk-spinner="ratio: 0.6"></div> || ''}
      </button>
    </div>
  );
}
