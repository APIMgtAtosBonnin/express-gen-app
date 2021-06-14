const dbconfig = require('./secrets.json');
const { MongoClient } = require("mongodb");

// console.log(dbconfig.database.mongo_uri);
// console.log(dbconfig.database.db);

MongoClient.connect(dbconfig.database.mongo_uri, { useUnifiedTopology: true })
.then(client =>{
  const db = client.db(dbconfig.database.db);
  //const collection = db.collection('your-collection');
  console.log(db.listCollections().toArray());
});
