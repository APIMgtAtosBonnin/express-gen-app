var express = require('express');
var apiv1 = express.Router();

apiv1.get('/', function(req, res) {
  res.send('Hello from APIv1 root route.');
});

apiv1.get('/users', function(req, res) {
  res.header("Content-Type",'application/json');
  res.json({api: {v1: {users: ["Pierre", "Khalid", "Chaimae", "Ouassim", "Nadia"]}}});
});

module.exports = apiv1;