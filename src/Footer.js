import React from 'react';
import Filters from './Filters';

class Footer extends React.Component {
  getCounterText() {
    const count = 0;
    return count ? (`${count} item${count === 1 ? '' : 's'} left`) : 'Empty list';
  }

  render() {
    return (
      <footer className="footer">
        <span className="todo-count">{this.getCounterText()}</span>
        <Filters/>
        <button className="clear-completed">Clear completed</button>
      </footer>
    );
  }
}

export default Footer;
