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

export default class App extends React.Component {
  constructor() {
    super();

    this.addItem = this.addItem.bind(this);
    this.toggleItemCompleted = this.toggleItemCompleted.bind(this);
    this.toggleAllCompleted = this.toggleAllCompleted.bind(this);
    this.setFilterSelected = this.setFilterSelected.bind(this);
    this.clearCompleted = this.clearCompleted.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.updateItem = this.updateItem.bind(this);

    this.state = {
      todos: model.getItemsFiltered(),
      filters: model.getFilters()
    };
  }

  _updateState() {
    this.setState({
      filters: model.getFilters(),
      todos: model.getItemsFiltered()
    });
  }

  addItem(text) {
    model.addItem(text);
    this._updateState();
  }

  updateItem(item) {
    model.updateItem(item);
    this._updateState();
  }

  removeItem(item) {
    model.removeItem(item);
    this._updateState();
  }

  toggleItemCompleted(item) {
    model.toggleItemCompleted(item);
    this._updateState();
  }

  toggleAllCompleted(isOn) {
    model.toggleAllCompleted(isOn);
    this._updateState();
  }

  clearCompleted() {
    model.removeCompleted();
    this._updateState();
  }

  setFilterSelected(filterId) {
    model.setFilterSelected(filterId);
    this._updateState();
  }

  render() {
    const
      activeCount = model.getActiveTodosCount(),
      totalCount  = model.getTotalTodosCount();

    return (
      <div>
        <Header addItem={this.addItem} />
        <section className="main">
          <CheckAll isChecked={!activeCount && !!totalCount} hideControl={!totalCount} toggleAllCompleted={this.toggleAllCompleted} />
          <TodoList
            todos={this.state.todos}
            toggleItemCompleted={this.toggleItemCompleted}
            removeItem={this.removeItem}
            updateItem={this.updateItem}
          />
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
