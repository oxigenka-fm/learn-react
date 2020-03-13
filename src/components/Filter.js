import React from 'react';
import { AppContext } from '../contexts/app';

export default function Filter() {
  return (
    <AppContext.Consumer>
    {context => (
      <div className="uk-margin-medium-bottom uk-flex">
        <form className="uk-search uk-search-default uk-width-medium uk-margin-remove uk-margin-right">
          <span data-uk-search-icon></span>
          {context.controls.isLoading && <span className="uk-search-icon uk-search-icon-flip" data-uk-spinner="ratio: 0.6"></span>}
          <input className="uk-search-input" type="search" placeholder="Search..."
            value={context.controls.search}
            onChange={(e) => context.controls.setSearch(e.target.value)}
          />
        </form>
        <select className="uk-select uk-width-small uk-margin-auto-left"
          value={context.controls.order}
          onChange={e => context.controls.setOrder(e.target.value)}>
          <option value="asc">ASC</option>
          <option value="desc">DESC</option>
        </select>
        <select className="uk-select uk-width-small uk-margin-left"
          value={context.controls.limit}
          onChange={e => context.controls.setLimit(e.target.value)}>
          <option value="6">6</option>
          <option value="12">12</option>
          <option value="24">24</option>
        </select>
        <div className="uk-button-group uk-margin-left">
          <button className={`uk-button uk-button-default ${context.controls.view === 'grid' ? 'uk-active' : ''}`}
            onClick={() => context.controls.setView('grid')}>
            <span data-uk-icon="icon: grid"></span>
          </button>
          <button className={`uk-button uk-button-default ${context.controls.view === 'list' ? 'uk-active' : ''}`}
            onClick={() => context.controls.setView('list')}>
            <span data-uk-icon="icon: list"></span>
          </button>
        </div>
      </div>
    )}
    </AppContext.Consumer>
  );
}
