const dbconfig = require('./secrets.json');

console.log(dbconfig.database.mongo_uri);
console.log(dbconfig.database.db);
