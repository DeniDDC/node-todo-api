const findDocuments = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('Users');
    // Find some documents
    //collection.find({ name:'deni'}).toArray(function(err, docs) {//ada where nya
    collection.find({}).toArray(function(err, docs) {
      assert.equal(err, null);
      console.log("Found the following records");
      console.log(docs)
      callback(docs);
    });
  }

  const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'TodoApp';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected correctly to server");

  const db = client.db(dbName);

  
    findDocuments(db, function() {
      client.close();
    });
});