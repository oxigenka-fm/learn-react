import React from 'react';
import Filters from './Filters';

export default class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.clearCompleted = this.clearCompleted.bind(this);
  }

  clearCompleted(e) {
    e.preventDefault();

    this.props.clearCompleted();
  }

  getCounterText() {
    return this.props.countActive
      ? (`${this.props.countActive} item${this.props.countActive > 1 ? 's' : ''} left`)
      : 'All done!';
  }

  render() {
    if (!this.props.countTotal) {
      return null;
    }

    const clearCompletedButton = this.props.countActive === this.props.countTotal
      ? null
      : <button className="clear-completed" onClick={this.clearCompleted}>Clear completed</button>;

    return (
      <footer className="footer">
        <span className="todo-count">{this.getCounterText()}</span>
        <Filters filters={this.props.filters} setFilterSelected={this.props.setFilterSelected}/>
        {clearCompletedButton}
      </footer>
    );
  }
}
