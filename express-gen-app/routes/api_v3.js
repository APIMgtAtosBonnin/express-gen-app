var express = require('express');
var apiv3 = express.Router();


//Routes
apiv3.get('/', async function(req, res) {
    const db = req.app.locals.db;
    const collectionList = await db.listCollections().toArray();
    var response = "Hello from APIv3 root route. <br>APIv3 uses a MongoDB connector to return available database collections. <br><br> Available collections: <br>";
    collectionList.forEach(col => response += `- ${col.name}` + "<br>");
    res.send(response);
});

apiv3.get('/clients', async function(req, res) {
  //return clients collection
  const db = req.app.locals.db;
  const collection = db.collection('clients');
  collection.find({}).toArray()
  .then(response => res.status(200).json(response))
  .catch(error => console.error(error));
});

apiv3.get('/service_providers', function(req, res) {
    //return service_providers collection
  const db = req.app.locals.db;
  const collection = db.collection('service_providers');
  collection.find({}).toArray()
  .then(response => res.status(200).json(response))
  .catch(error => console.error(error));
  });

apiv3.get('/contracts', function(req, res) {
//return contracts collection
const db = req.app.locals.db;
const collection = db.collection('contracts')
collection.find({}).toArray()
.then(response => res.status(200).json(response))
.catch(error => console.error(error));
});

module.exports = apiv3;
