require('dotenv').config();
const { MongoClient } = require("mongodb");

//Create a new MongoClient
const client = new MongoClient(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function run() {
  try {
    // Connect the client to the server
    await client.connect();

    // Establish and verify connection
    await client.db("projects_v1").command({ ping: 1 });
    console.log("Connected successfully to server");

    //Retrieve collections
    await  listCollections(client);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

async function listCollections(client){
  const db = client.db("projects_v1");
  collectionList = await db.listCollections().toArray();
  var i;
  for (i = 0; i < collectionList.length; i++) {
      console.log(collectionList[i].name);
  }
  // console.log("Available collections:");
  // collectionList.name.forEach(col => console.log(` - ${col.name}`));
};
