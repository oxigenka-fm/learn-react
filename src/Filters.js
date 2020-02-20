import React from 'react';

class FilterItem extends React.Component {
  onClick(e) {
    e.preventDefault();

    this.props.onFilter(this.props.filter.id);
  }

  render() {
    const item = this.props.filter;
    return (
      <li>
        <a href={item.id} className={item.selected ? 'selected' : ''} onClick={event => this.onClick(event)}>{item.title}</a>
      </li>
    )
  }
}

export default class Filters extends React.Component {
  render() {
    return (
      <ul className='filters'>
        {this.props.filters.map(item => (
          <FilterItem key={item.id} filter={item} onFilter={i => this.props.setFilterSelected(i)}/>
        ))}
      </ul>
    )
  }
}
