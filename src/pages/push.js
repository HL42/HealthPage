const MongoClient = require('mongodb').MongoClient;

// connect
MongoClient.connect('mongodb+srv://fuquanlin347:mongo@demo.ox9shyk.mongodb.net/', function(err, client) {
  if (err) throw err;

  const db = client.db('mydb');
  const collection = db.collection('mycollection');


  collection.deleteOne({ firstName: 'John', lastName: 'Doe' }, function(err, result) {
    if (err) throw err;

    console.log(result);

    client.close();
  });
});
