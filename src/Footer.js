import React from 'react';
import Filters from './Filters';

class Footer extends React.Component {
  getCounterText() {
    return this.props.count
      ? (`${this.props.count} item${this.props.count === 1 ? '' : 's'} left`)
      : 'Empty list';
  }

  render() {
    return (
      <footer className="footer">
        <span className="todo-count">{this.getCounterText()}</span>
        <Filters filters={this.props.filters} setFilterSelected={this.props.setFilterSelected}/>
        <button className="clear-completed">Clear completed</button>
      </footer>
    );
  }
}

export default Footer;
