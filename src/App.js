import React from 'react';
import Header from './Header';
import CheckAll from './CheckAll';
import TodoList from './TodoList';
import Footer from './Footer';
import TodoItemsModel from './TodoItemsModel';

const model = new TodoItemsModel([
  {id: 1, title: 'Todo 1', completed: false},
  {id: 2, title: 'Todo 2', completed: true},
  {id: 3, title: 'Todo 3', completed: false},
]);

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/

export default class App extends React.Component {
  constructor() {
    super();

    this.addItem = this.addItem.bind(this);
    this.toggleItemCompleted = this.toggleItemCompleted.bind(this);
    this.toggleAllCompleted = this.toggleAllCompleted.bind(this);
    this.setFilterSelected = this.setFilterSelected.bind(this);
    this.clearCompleted = this.clearCompleted.bind(this);
    this.removeItem = this.removeItem.bind(this);

    this.state = {
      todos: model.getItems(),
      filters: model.getFilters()
    };
  }

  updateTodosState() {
    this.setState({
      todos: model.getItems()
    });
  }

  addItem(text) {
    model.addItem({title: text, completed: false});
    this.updateTodosState();
  }

  removeItem(item) {
    model.removeItem(item);
    this.updateTodosState();
  }

  toggleItemCompleted(item) {
    model.toggleItemCompleted(item);
    this.updateTodosState();
  }

  toggleAllCompleted(isOn) {
    model.toggleAllCompleted(isOn);
    this.updateTodosState();
  }

  clearCompleted() {
    model.removeCompleted();
    this.updateTodosState();
  }

  setFilterSelected(filterId) {
    model.setFilterSelected(filterId);

    this.setState({
      filters: model.getFilters(),
      todos: model.getItems()
    });
  }

  render() {
    const
      activeCount = model.getActiveTodosCount(),
      totalCount  = model.getTotalTodosCount();

    return (
      <div>
        <Header addItem={this.addItem} />
        <section className="main">
          <CheckAll isChecked={!activeCount && !!totalCount} toggleAllCompleted={this.toggleAllCompleted} />
          <TodoList todos={this.state.todos} toggleItemCompleted={this.toggleItemCompleted} removeItem={this.removeItem} />
        </section>
        <Footer
          countActive={activeCount}
          countTotal={totalCount}
          filters={this.state.filters}
          setFilterSelected={this.setFilterSelected}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}
