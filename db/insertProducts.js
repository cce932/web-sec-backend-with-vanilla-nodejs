const productsData = require("./products.json");

// Replace the uri string with your MongoDB deployment's connection string.
// const uri = "<connection string uri>";

// const client = new MongoClient(uri);

const { PRODUCTS_COLLECTION } = process.env;

async function insertProducts(database) {
  const products = database.collection("products");

  // this option prevents additional documents from being inserted if one fails
  const options = { ordered: true };

  const result = await products.insertMany(productsData, options);
  console.log(`${result.insertedCount} documents were inserted`);
}

module.exports = insertProducts;
