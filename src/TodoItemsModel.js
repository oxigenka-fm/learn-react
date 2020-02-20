const filters = [
  {id: 'all', title: 'All', selected: true},
  {id: 'active', title: 'Active', selected: false},
  {id: 'completed', title: 'Completed', selected: false}
];

const getFilterSelected = () => {
  const currentFilter = filters.filter(item => item.selected);
  return currentFilter[0];
};

let todoNextId = 1;

class TodoItemsModel {
  constructor(items = []) {
    this.items = items;

    if (this.items.length) {
      todoNextId = items.reduce((index, item) => Math.max(index, item.id), 0) + 1;
    }
  }

  getFilters() {
    return filters;
  }

  setFilterSelected(filterId) {
    filters.forEach((filter, idx) => filters[idx].selected = filter.id === filterId);
  }

  getActiveTodosCount() {
    if (!this.items.length) {
      return null;
    }

    return this.getItems('active').length;
  }

  getTotalTodosCount() {
    if (!this.items.length) {
      return null;
    }

    return this.getItems('all').length;
  }

  getItems(filterId) {
    if (!filterId) {
      filterId = getFilterSelected().id;
    }

    if (filterId === 'all') {
      return this.items;
    }

    return this.items.filter(item => {
      return filterId === 'active' ? !item.completed : item.completed;
    });
  }

  toggleAllCompleted(isOn) {
    this.items = this.items.map(item => {
      item.completed = !!isOn;
      return item;
    });
  }

  toggleItemCompleted(item) {
    item.completed = !item.completed;
  }

  addItem(item) {
    const itemId = item.id || 0;

    if (itemId < todoNextId) {
      item.id = todoNextId;
    } else {
      todoNextId = itemId;
    }

    todoNextId++;

    this.items.push(item);
  }

  removeItem(item) {
    this.items = this.items.filter(todo => item.id !== todo.id);
  }

  removeCompleted() {
    this.items = this.items.filter(todo => !todo.completed);
  }
}

export default TodoItemsModel;
