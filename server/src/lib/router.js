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
        res.statusCode = 404;
        res.statusMessage = 'Error: resource not found';
        res.write('Resource not found, buddy boy');
        res.end();
      }
    })
    .catch(err => {
      res.statusCode = 500;
      res.statusMessage = 'Error: internal service error';
      res.write('Internal service error', req.parsed.pathname);
      res.end();
    });
};