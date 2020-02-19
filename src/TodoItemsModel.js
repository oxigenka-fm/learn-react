const filters = [
  {id: 'all', title: 'All', selected: true},
  {id: 'active', title: 'Active', selected: false},
  {id: 'completed', title: 'Completed', selected: false}
];

const getFilterSelected = () => filters.reduce((item, current) => item.selected ? item.id : current, 'all');

class TodoItemsModel {
  constructor(items = []) {
    this.items = items;

    this.index = items.reduce((item, index) => Math.max(index, item.id), 0);

    this.index = this.index || 0;
  }

  getFilters() {
    return filters;
  }

  setFilterSelected(filterId) {
    filters.forEach((filter, idx) => filters[idx].selected = filter.id === filterId);
  }

  getCount() {
    return this.items.length;
  }

  getItems(filterId = null) {
    if (!filterId) {
      filterId = getFilterSelected();
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
      isOn && !item.completed && (item.completed = true);
      !isOn && item.completed && (item.completed = false);
      return item;
    });

    return this.getItems();
  }

  addItem(item) {
    const itemId = Number(item.id);

    if (itemId < this.index) {
      item.id = this.index++;
    } else {
      this.index = itemId;
    }

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
