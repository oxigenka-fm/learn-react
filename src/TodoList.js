import React from 'react';

class TodoItem extends React.Component {
  constructor(props) {
    super(props);

    this.toggleItemCompleted = this.toggleItemCompleted.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  toggleItemCompleted() {
    this.props.toggleItemCompleted(this.props.item);
  }

  removeItem() {
    this.props.removeItem(this.props.item);
  }

  render() {
    if (!this.props.item) {
      return null;
    }

    const className = this.props.item.completed ? 'completed' : '';
    const label = this.props.item.title;

    return (
      <li className={className}>
        <div className="view">
          <input className="toggle" type="checkbox" onChange={this.toggleItemCompleted} checked={this.props.item.completed} />
          <label>{label}</label>
          <button className="destroy" onClick={this.removeItem}></button>
        </div>
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
        <TodoItem key={item.id} item={item} toggleItemCompleted={this.props.toggleItemCompleted} removeItem={this.props.removeItem}/>
      )
    );

    return (
      <ul className="todo-list">
        {todos}
      </ul>
    );
  }
}
