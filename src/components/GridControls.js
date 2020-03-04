import React from 'react';

export default function GridControls({ view, setView, search, setSearch, limit, setLimit, order, setOrder }) {
  return (
    <div className="uk-margin-medium-bottom uk-flex">
      <form className="uk-search uk-search-default uk-width-medium uk-margin-remove uk-margin-right">
        <span data-uk-search-icon></span>
        <span className="uk-search-icon uk-search-icon-flip" data-uk-spinner="ratio: 0.6"></span>
        <input className="uk-search-input" type="search" placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)} />
      </form>
      <select className="uk-select uk-width-small uk-margin-auto-left" value={order} onChange={e => setOrder(e.target.value)}>
        <option value="asc">ASC</option>
        <option value="desc">DESC</option>
      </select>
      <select className="uk-select uk-width-small uk-margin-left" value={limit} onChange={e => setLimit(e.target.value)}>
        <option value="5">6</option>
        <option value="10">12</option>
        <option value="20">24</option>
      </select>
      <div className="uk-button-group uk-margin-left">
        <button className={`uk-button uk-button-default ${view === 'grid' ? 'uk-active' : ''}`} onClick={() => setView('grid')}>
          <span data-uk-icon="icon:  grid"></span>
        </button>
        <button className={`uk-button uk-button-default ${view === 'list' ? 'uk-active' : ''}`} onClick={() => setView('list')}>
          <span data-uk-icon="icon:  list"></span>
        </button>
      </div>
    </div>
  );
}
