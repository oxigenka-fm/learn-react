import React from 'react';

class TodoItem extends React.Component {
  constructor(props) {
    super();
    this.item = props.item || null;
  }

  render() {
    if (!this.item) {
      return null;
    }

    return (
      <li className={this.item.completed ? 'completed' : ''}>
        <div className="view">
          <input className="toggle" type="checkbox" checked={this.item.completed} />
          <label>{this.item.title}</label>
          <button className="destroy"></button>
        </div>
      </li>
    );
  }
}

class TodoList extends React.Component {
  constructor(props) {
    super();
    this.items = props.items ? props.items.map(item => (
      <TodoItem key={item.id} item={item}/>
    )) : [];
  }

  render() {
    if (!this.items.length) {
      return null;
    }

    return (
      <ul className="todo-list">
        {this.items}
      </ul>
    );
  }
}

export default TodoList;
