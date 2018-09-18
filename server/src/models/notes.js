'use strict';

const uuid = require('uuid/v1');
const storage = require(`../lib/storage/memory.js`);

class Notes {
  constructor(title, content){
    this.id = uuid();
    this.createdOn = new Date();
    this.title = title;
    this.content = content;
  }

  save() {
    return storage.save(this);
  }

  get(id) {
    return storage.get(id);
  }


}

module.exports = Notes;