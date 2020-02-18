import React from 'react';

class FilterItem extends React.Component {
  onClick(e) {
    e.preventDefault();

    this.props.onFilter(this.props.item);
  }

  render() {
    const item = this.props.item;
    return (
      <li>
        <a href={item.href} className={item.selected ? 'selected' : ''} onClick={event => this.onClick(event)}>{item.title}</a>
      </li>
    )
  }
}

class Filters extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [
        {href: 'all', title: 'All', selected: true},
        {href: 'active', title: 'Active', selected: false},
        {href: 'completed', title: 'Completed', selected: false}
      ]
    };
  }

  onFilter(item) {
    const items = this.state.items.map(loopItem => {
      loopItem.selected = loopItem.href === item.href ? true : false;
      return loopItem;
    });

    this.setState({items: items});
  }

  render() {
    return (
      <ul className='filters'>
        {this.state.items.map(item => (
          <FilterItem key={item.href} item={item} onFilter={i => this.onFilter(i)}/>
        ))}
      </ul>
    )
  }
}

export default Filters;
