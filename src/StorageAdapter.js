/** Auxiliary functions **/

const getRandomInt = (min, max) => Math.ceil(Math.random() * (max - min + 1)) + min;

const ids = [];
const indexifyItems = items => items.map(item => {
  let id;

  do {
    id = getRandomInt(1, 1000000);
  } while (ids.includes(id));

  ids.push(id);
  item.id = id;

  return item;
});

/** /Auxiliary functions **/


/** Repositories **/

class ArrayRepository {
  constructor() {
    this.items = [];
  }

  initItems(items) {
    if (!this.items.length && items.length) {
      this.items = indexifyItems(items);
    }
  }

  saveItems(items) {
    this.items = items;
  }

  getItems() {
    return this.items;
  }
}


class LocalStorageRepository {
  constructor() {
    this.items = [];
    this.key = 'todos';
    this.storage = window.localStorage;
  }

  _get() {
    if (!this.items.length) {
      const storedRawItem = this.storage.getItem(this.key);
      if (!storedRawItem) {
        return [];
      }
      this.items = JSON.parse(storedRawItem.trim());
    }

    return this.items;
  }

  _save(items) {
    this.storage.setItem(this.key, JSON.stringify(items));
    this.items = items;
  }

  initItems(items) {
    if (!this._get().length && items.length) {
      const itemsWithIds = indexifyItems(items);
      this._save(itemsWithIds);
    }
  }

  saveItems(items) {
    this._save(items);
  }

  getItems() {
    return this._get();
  }
}

/** /Repositories **/


/** Storage adapter **/

export default class StorageAdapter {
  constructor() {
    if (window.localStorage) {
      this.storage = new LocalStorageRepository();
    } else {
      this.storage = new ArrayRepository();
    }
  }

  initItems(items) {
    this.storage.initItems(items);
  }

  getItems() {
    return this.storage.getItems();
  }

  saveItems(items) {
    this.storage.saveItems(items);
  }
}

/** Storage adapter **/
