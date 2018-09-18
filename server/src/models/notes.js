'use strict';

const uuid = require('uuid/v1');
const storage = require(`..lib/storage/data-store.js`);

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
}

module.exports = Notes;