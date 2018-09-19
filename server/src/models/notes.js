'use strict';

const uuid = require('uuid/v1');
const storage = require(`../lib/storage/data-store.js`);

class Notes {
  constructor(title, content){
    this.id = uuid();
    this.createdOn = this.lastUpdated = new Date();
    this.title = title;
    this.content = content;
  }

  save() {
    return storage.save(this);
  }

  static get(id) {
    return storage.get(id);
  }

  static delete(id){
    return storage.delete(id);
  }

}

module.exports = Notes;