const MongoClient = require( 'mongodb' ).MongoClient;

const url = "mongodb+srv://db-user:db-user123@cluster0.0ifya.mongodb.net/projects_v1?retryWrites=true&w=majority";

const client = new MongoClient(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = {client, url};