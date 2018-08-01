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

    /* db.collection('Todos').find({
        _id: new ObjectID('5b60ed9f35bfd81b3c21c918')
    }).toArray().then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch Todos', err);
    }); */

    /* db.collection('Todos').find().count().then((count) => {
        console.log(`Todos ${count}`);
    }, (err) => {
        console.log('Unable to fetch Todos', err);
    }); */

    db.collection('Users').find({
        name: 'Teste'
    }).toArray().then((docs) => {
        console.log('Users');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch Users', err);
    });

    db.close();
});