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

class Filters extends React.Component {
  // constructor(props) {
  //   super();
  //   this.state = {
  //     filters: props.filters
  //   };
  // }

  // onFilter(item) {
  //   const items = this.state.filters.map(loopItem => {
  //     loopItem.selected = loopItem.id === item.id ? true : false;
  //     return loopItem;
  //   });

  //   this.setState({filters: items});
  // }

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

export default Filters;
