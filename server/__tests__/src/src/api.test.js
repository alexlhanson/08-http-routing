'use strict';
const router = require('../../../src/lib/router.js');
const api = require('../../../src/api/api.js');
const request = require('supertest');
const storage = require('../../../src/lib/storage/memory');

describe('Post request API tests', () => {
  let req = {
    url: 'http://localhost:3000/',
    method:  'POST',
    body: {
      title:  'noteyness',
      content: 'kind of forcing it',
    },
  };

  test('should show given a valid post request it will return a 200 status', (done) => { 

    request('http://localhost:3000')
      .post('/api/v1/notes')
      .send(req.body)
      .expect(200, req.body.title, done);
  });
});