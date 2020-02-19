class TodoItemsModel {
  constructor(items = []) {
    this.items = items;

    this.index = items.reduce((item, index) => Math.max(index, item.id), 0);

    this.index = this.index || 0;
  }

  getCount() {
    return this.items.length;
  }

  getItems() {
    return this.items;
  }

  toggleAllCompleted(isOn) {
    this.items = this.items.map(item => {
      isOn && !item.completed && (item.completed = true);
      !isOn && item.completed && (item.completed = false);
      return item;
    });
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
