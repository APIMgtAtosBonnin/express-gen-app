var express = require('express');
var apiv3 = express.Router();
//var dbconfig = require('../database/dbconfig.js');

//Routes
apiv3.get('/', async function(req, res) {
  const db = req.app.locals.db;
  const collection = db.collection('clients')
  collection.find({}).toArray()
  .then(response => res.status(200).json(response))
  .catch(error => console.error(error));
});

apiv3.get('/clients', async function(req, res) {
  //return clients collection
});

apiv3.get('/service-providers', function(req, res) {
    res.header("Content-Type",'application/json');
    res.json({api: {v2: {users: ["Mourad", "Emmanuel", "Cyril", "Damien", "Mohammed", "Abdelhamid"]}}});
  });

apiv3.get('/contracts', function(req, res) {
res.header("Content-Type",'application/json');
res.json({api: {v2: {users: ["Mourad", "Emmanuel", "Cyril", "Damien", "Mohammed", "Abdelhamid"]}}});
});

module.exports = apiv3;