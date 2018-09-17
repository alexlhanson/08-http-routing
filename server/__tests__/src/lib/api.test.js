'use strict';
const router = require('../../../src/lib/router.js');
const api = require('../../../src/api/api.js');

describe('Post request API tests', () => {
  let req = {
    url : 'http://localhost:3000/',
    method : 'POST',
    body : JSON.stringify({
      id : 1,
      note : 'kind of forcing it',
    }),
  };

  test('should show given a valid post request it will return a 200 status', () => { 
    let actual = router.route(req, {});
    expect(actual.status).toBe(200);
  });
});