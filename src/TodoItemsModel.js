import StorageAdapter from './StorageAdapter';

const filters = [
  {id: 'all', title: 'All', selected: true},
  {id: 'active', title: 'Active', selected: false},
  {id: 'completed', title: 'Completed', selected: false}
];

const getFilterSelected = () => {
  const currentFilter = filters.filter(item => item.selected);
  return currentFilter[0];
};


const storage = new StorageAdapter();

export default class TodoItemsModel {
  constructor(items = []) {
    storage.initItems(items);
  }

  /** Handling filters **/

  getFilters() {
    return filters;
  }

  setFilterSelected(filterId) {
    filters.forEach((filter, idx) => filters[idx].selected = filter.id === filterId);
  }

  /** /Handling filters **/


  /** TODOs getters **/

  getActiveTodosCount() {
    return this.getItemsFiltered('active').length;
  }

  getTotalTodosCount() {
    return storage.getItems().length;
  }

  getItemsFiltered(filterId = null) {
    if (!filterId) {
      filterId = getFilterSelected().id;
    }

    const items = storage.getItems();

    if (filterId === 'all') {
      return items;
    }

    return items.filter(item => {
      return filterId === 'active' ? !item.completed : item.completed;
    });
  }

  /** /TODOs getters **/


  /** TODOs toggles **/

  toggleAllCompleted(isOn) {
    const items = storage.getItems().map(item => {
      item.completed = !!isOn;
      return item;
    });

    storage.saveItems(items);
  }

  toggleItemCompleted(item) {
    const items = storage.getItems().map(todo => {
      if (todo.id === item.id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });

    storage.saveItems(items);
  }

  /** /TODOs toggles **/


  /** Handling TODOs **/

  addItem(text) {
    const items = storage.getItems();

    const item = {
      id: Date.now(),
      title: text,
      completed: false
    };

    items.push(item);

    storage.saveItems(items);
  }

  updateItem(item) {
    const items = storage.getItems().map(todo => {
      if (todo.id === item.id) {
        return item;
      }
      return todo;
    });

    storage.saveItems(items);
  }

  removeItem(item) {
    const items = storage.getItems().filter(todo => item.id !== todo.id);
    storage.saveItems(items);
  }

  removeCompleted() {
    const items = storage.getItems().filter(todo => !todo.completed);
    storage.saveItems(items);
  }

  /** /Handling TODOs **/
}
