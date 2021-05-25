var express = require('express');
var apiv2 = express.Router();

apiv2.get('/', function(req, res) {
  res.send('Hello from APIv2 root route.');
});

apiv2.get('/users', function(req, res) {
  res.json({api: {v2: {users: ["Mourad", "Emmanuel", "Cyril", "Damien", "Mohammed", "Abdelhamid"]}}});
});

module.exports = apiv2;