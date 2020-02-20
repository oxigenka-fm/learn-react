import React from 'react';

class TodoItem extends React.Component {
  render() {
    if (!this.props.item) {
      return null;
    }

    return (
      <li className={this.props.item.completed ? 'completed' : ''}>
        <div className="view">
          <input className="toggle" type="checkbox" defaultChecked={this.props.item.completed} />
          <label>{this.props.item.title}</label>
          <button className="destroy"></button>
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

    return (
      <ul className="todo-list">
        {this.props.todos.map(item => <TodoItem key={item.id} item={item}/>)}
      </ul>
    );
  }
}
