import React, { useState } from 'react';
import useApp from '../hooks/useApp';

export default function LoadMore() {
  const { controls: { isLoading } } = useApp();

  return (
    <div className="uk-margin">
      <button
        className="uk-button uk-button-primary uk-width-1-1 uk-margin-small-bottom {controls.isLoading ? 'uk-disabled' : ''}"
        disabled={isLoading}>
        Load more
        {isLoading && <div className="uk-margin-small-left" data-uk-spinner="ratio: 0.6"></div> || ''}
      </button>
    </div>
  );
}
