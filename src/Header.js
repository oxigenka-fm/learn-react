import React from 'react';

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.addItem = this.addItem.bind(this);
  }

  addItem(event) {
    event.preventDefault();

    const value = event.target.value.trim();

    if (!value) {
      event.target.value = '';
      return;
    }

    if ([13, 10].includes(event.keyCode)) {
      this.props.addItem(value);
      event.target.value = '';
    }
  }

  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <input className="new-todo" placeholder="What needs to be done?" autoFocus onKeyUp={this.addItem}/>
      </header>
    );
  }
};
