'use strict';

// First Party Modules
const url = require('url');
const queryString = require('querystring');

module.exports = (req) => {

  return new Promise( (resolve, reject) => {
    console.log('howdy');
    if( !(req || req.url) ) { reject('Invalid Request Object. Cannot Parse'); }

    // req.url = http://localhost:3000/api/v1/notes?id=12345
    req.parsed = url.parse(req.url);
    console.info(req.parsed);
    /*
        req.parsed = {
          pathname: '/api/vi/notes',
          query: '?id=12345&name=John',
        }
       */

    req.query = queryString.parse(req.parsed.query);
    /*
        req.query = {
          id:12345,
          name:'John'
        }
       */
    if (req.query.id){
      req.parsed.pathname += '/:id';
    }

    if(! req.method.match(/POST|PUT|PATCH/) ) {
      resolve(req);
    }

    let text = '';

    req.on('data', (buffer) => {
      console.log('data');
      text += buffer.toString();
    });

    req.on('end', () => {
      console.log('end');
      try{
        console.log('end-try');
        req.body = JSON.parse(text);
        resolve(req);
      }
      catch(err) { 
        console.log('end-catch');
        // req.body = '';
        // resolve(req);
        reject(err); 
      }

    });

    req.on('err', (err) => {
      console.log('end');
      reject(err);
    });

  });

};
