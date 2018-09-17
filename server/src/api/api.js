'use strict';

const router = require('../lib/router.js');

router.post('/', (req, res) => {
  if (typeof (JSON.parse(req.body)) !== 'object'){
    res.status = '500';
    res.write(`TypeError: body type not JSON string`);
  } else {
    res.status = '200';
    res.write(`${JSON.stringify(req.body)}`);
  }
  res.end();
});

router.get('/', (req, res) => {
  // do stuff
});
  
router.put('/', (req, res) => {
  // do stuff
});

router.delete('/', (req, res) => {
  // do stuff
});