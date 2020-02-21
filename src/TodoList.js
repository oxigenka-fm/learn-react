import React from 'react';

class TodoItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false
    };

    this.toggleItemCompleted = this.toggleItemCompleted.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.editStart = this.editStart.bind(this);
    this.editFinish = this.editFinish.bind(this);
  }

  _updateItemTitle(value) {
    this.props.item.title = value;
    this.props.updateItem(this.props.item);
    this.setState({editing: false});
  }

  toggleItemCompleted() {
    this.props.toggleItemCompleted(this.props.item);
  }

  removeItem() {
    this.props.removeItem(this.props.item);
  }

  editStart() {
    this.setState({
      editing: this.props.item
    });
  }

  editFinish(event) {
    event.preventDefault();

    const value = event.target.value.trim();

    if (!value) {
      this.props.removeItem(this.props.item);
      return;
    }

    if (event.keyCode) {
      // onKeyUp handler
      if (13 === event.keyCode) {
        // update on Enter
        this._updateItemTitle(value);
      } else if (27 === event.keyCode) {
        // do nothing on ESC
        this.setState({editing: false});
      }
    } else {
      // onBlur handler
      // update when focus has lost
      this._updateItemTitle(value);
    }
  }

  render() {
    if (!this.props.item) {
      return null;
    }

    const className = [];
    if (this.props.item.completed) {
      className.push('completed');
    }

    let editor = null;
    if (this.state.editing) {
      className.push('editing');
      editor = (
        <input className="edit"
          defaultValue={this.props.item.title}
          onBlur={this.editFinish}
          onKeyUp={this.editFinish}
          autoFocus
        />
      );
    }

    return (
      <li className={className.join(' ')}>
        <div className="view">
          <input className="toggle" type="checkbox" onChange={this.toggleItemCompleted} checked={this.props.item.completed} />
          <label onDoubleClick={this.editStart}>{this.props.item.title}</label>
          <button className="destroy" onClick={this.removeItem}></button>
        </div>
        {editor}
      </li>
    );
  }
}

export default class TodoList extends React.Component {
  render() {
    if (!this.props.todos.length) {
      return null;
    }

    const todos = this.props.todos.map(item => (
        <TodoItem key={item.id}
          item={item}
          toggleItemCompleted={this.props.toggleItemCompleted}
          removeItem={this.props.removeItem}
          updateItem={this.props.updateItem}
        />
      )
    );

    return (
      <ul className="todo-list">
        {todos}
      </ul>
    );
  }
}
