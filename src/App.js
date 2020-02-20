import React from 'react';
import Header from './Header';
import CheckAll from './CheckAll';
import TodoList from './TodoList';
import Footer from './Footer';
import TodoItemsModel from './TodoItemsModel';

const initTodos = todos => new TodoItemsModel(todos);

let model = initTodos([
  {id: 1, title: 'Todo 1', completed: true},
  {id: 2, title: 'Todo 2', completed: true},
  {id: 3, title: 'Todo 3', completed: true},
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

    console.log('App construct');
    this.state = {
      todos: model.getItems(),
      filters: model.getFilters()
    };
  }

  addItem(text) {
    model.addItem({label: text, completed: false});

    this.setState({
      todos: model.getItems()
    });
  }

  toggleAllCompleted() {
    model.toggleAllTodosCompleted();

    this.setState({
      todos: model.getItems()
    });
  }

  setFilterSelected(filterId) {
    model.setFilterSelected(filterId);

    this.setState({
      filters: model.getFilters()
    });
  }

  render() {
    return (
      <div>
        <Header />
        <section className="main">
          <CheckAll isChecked={console.log('isChecked template') || !model.getItems('active').length} toggleAllCompleted={() => this.toggleAllCompleted()} />
          <TodoList todos={this.state.todos} />
        </section>
        <Footer clear={() => this.clearCompleted()}
          count={model.getActiveTodosCount()}
          filters={model.getFilters()}
          setFilterSelected={filterId => this.setFilterSelected(filterId)}
        />
      </div>
    );
  }
}
