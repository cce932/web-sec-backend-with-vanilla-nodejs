const { MongoClient, ServerApiVersion } = require("mongodb");

const insertProducts = require("./insertProducts");

const { DB, DB_USERNAME, DB_PASSWORD } = process.env;

const uri = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@websecurity.isfti.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

client.connect(async (err) => {
  const database = client.db(DB);

  // await insertProducts(database).catch(console.dir);

  client.close();
});
