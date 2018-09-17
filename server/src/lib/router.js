'use strict';

const parser = require('./parser.js');

const router = module.exports = {};

// This object will hold our routing table
router.routes = {};

const methods = ['GET', 'PUT', 'PATCH', 'POST', 'DELETE'];

methods.forEach(method => {
  router.routes[method] = {};

  router[method.toLowerCase()] = function(path, cb) {
    router.routes[method][path] = cb;
  };
});

router.route = (req, res) => {
  return parser(req)
    .then(req => {
      let handler = router.routes[req.method][req.parsed.pathname];

      if(handler){
        return handler(req, res);
      }else{
        //send 404
      }
    })
    .catch(err => {
      console.error(err);
      res.status = 500;
      res.statusMessage = 'Error while parsing request';
      res.write('Request failed parsing', req.parsed.pathname);
      res.end();
    });
}