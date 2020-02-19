import React from 'react';
import Header from './Header';
import CheckAll from './CheckAll';
import TodoList from './TodoList';
import Footer from './Footer';
import TodoItemsModel from './TodoItemsModel';

const initTodos = todos => new TodoItemsModel(todos);

let model = initTodos([
  {id: 1, label: 'Todo 1', completed: false},
  {id: 2, label: 'Todo 2', completed: true},
  {id: 3, label: 'Todo 3', completed: false},
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

class App extends React.Component {
  constructor() {
    super();

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
    model.toggleAllCompleted();

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
          <CheckAll checked={!model.getItems('active').length} toggleAllCompleted={() => this.toggleAllCompleted()} />
          <TodoList todos={this.state.todos} toggle />
        </section>
        <Footer clear={() => this.clearCompleted()}
          count={model.getCount()}
          filters={model.getFilters()}
          setFilterSelected={filterId => this.setFilterSelected(filterId)}
        />
      </div>
    );
  }
}

export default App;
