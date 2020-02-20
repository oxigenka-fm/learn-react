import React from 'react';

class FilterItem extends React.Component {
  constructor(props) {
    super(props);

    this.selectFilter = this.selectFilter.bind(this);
  }

  selectFilter(e) {
    e.preventDefault();

    this.props.onFilter(this.props.filter.id);
  }

  render() {
    const item = this.props.filter;
    return (
      <li>
        <a href={item.id} className={item.selected ? 'selected' : ''} onClick={this.selectFilter}>{item.title}</a>
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
