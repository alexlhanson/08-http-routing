'use strict';

const router = require('../lib/router.js');
const Notes = require('../models/notes');

let sendJSON = (res, data) => {
  res.statusCode = '200';
  res.statusMessage = 'OK';
  res.setHeader('Content-type', 'application/json');
  res.write(JSON.stringify(data));
  res.end();
};

let serverError = (res, err) => {
  let error = { error: err };
  res.statusCode = 500;
  res.statusMessage = 'Server Error';
  res.setHeader('Content-Type', 'application/json');
  res.wrote(JSON.stringify(error));
  res.end();
};

router.post('/api/v1/notes', (req, res) => {
  if (typeof req.body !== 'object') {
    res.statusCode = '404';
    res.write(`TypeError: body type not JSON string`);
    res.end();
  } else {
    let record = new Notes(req.body.title, req.body.content);
    console.log(record);
    record.save()
      .then(data => sendJSON(res, data))
      .catch(err => serverError(res, err));
  }
});


router.get('/api/v1/notes/:id', (req, res) => {
  if (typeof req.body !== 'object') {
    res.statusCode = '404';
    res.write(`TypeError: body type not JSON string`);
    res.end();
  } else if (!req.parse.query.id) {
    res.statusCode = '404';
    res.write(`TypeError: cannot get resource of blank id`);
    res.end();
  } else {
    Notes.get(req.parse.query.id)
      .then(data => sendJSON(res, data))
      .catch(err => serverError(res, err));
  }

});

// router.put('/api/v1/notes', (req, res) => {
//   // do stuff
// });

router.delete('/api/v1/notes/:id', (req, res) => {
  if (typeof (JSON.parse(req.body)) !== 'object') {
    res.statusCode = '404';
    res.write(`TypeError: body type not JSON string`);
    res.end();
  } else if (!req.parse.query.id) {
    res.statusCode = '404';
    res.write(`TypeError: cannot delete resource of blank id`);
    res.end();
  } else {
    Notes.delete(req.parse.query.id)
      .then(res => {
        res.statusCode = '200';
        res.statusMessage = 'OK';
        res.setHeader('Content-type', 'application/json');
        res.write(JSON.stringify(res));
        res.end();
      })
      .catch(err => serverError(res, err));
  }
});