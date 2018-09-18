'use strict';

const storage = module.exports = {};
const databaseDir = `${__dirname}/../../data`;
const fs = require('fs');


storage.get = id => {
  return new Promise((resolve, reject) => {
    if(!id) {reject ('ERROR: no id provided in data');}

    let file = `${databaseDir}/${id}.json`;

    fs.readFile(file, (err, data) =>{
      if (data){
        let obj = JSON.parse(data.toString());
        resolve(obj);
      } else {reject(`${id} not found`)
      };
    });
  });
};

storage.save = data => {
  return new Promise((resolve, reject) => {
    if (!data.id){
      reject('Error: no id provided on data');
    }

    let file = `${databaseDir}/${data.id}.json`;
    let text = JSON.stringify(data);

    fs.writeFile(file, text, (err => {
      if(err) {reject (err);}
      resolve(data);
    }));
  });
};

