//const MongoClient = require('mongodb').MongoClient;

const {
    MongoClient,
    ObjectID
} = require('mongodb');

MongoClient.connect('mongodb://172.17.0.2:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to Mongo Server');
    }
    console.log('Connected to Mongo Server');

    /*  db.collection('Todos').insertOne({
         text: 'Something to do',
         completed: false
     }, (err, result) => {
         if (err) {
             return console.log('Unable to insert', err);
         }

         console.log(JSON.stringify(result.ops, undefined, 2));
     }) */

    /* db.collection('Users').insertOne({
        name: 'Teste',
        age: 34,
        location: 'Brazil'
    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert', err);
        }

        console.log(result.ops[0]._id.getTimestamp());
    }) */

    db.close();
});