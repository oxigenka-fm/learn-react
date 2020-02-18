import React from 'react';
import Header from './Header';
import CheckAll from './CheckAll';
import TodoList from './TodoList';
import Footer from './Footer';
import TodoItemsModel from './TodoItemsModel';

const model = new TodoItemsModel([
  {id: 1, text: 'Todo 1', completed: false},
  {id: 2, text: 'Todo 2', completed: true},
  {id: 3, text: 'Todo 3', completed: false},
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
      todos: model
    };
  }

  getCount() {
    return this.state.todos.getCount();
  }

  render() {
    return (
      <div>
        <Header />
        <section className="main">
          <CheckAll />
          <TodoList todos={this.state.todos} />
        </section>
        <Footer clear={() => this.clearCompleted()} count={this.getCount()} />
      </div>
    );
  }
}

export default App;
