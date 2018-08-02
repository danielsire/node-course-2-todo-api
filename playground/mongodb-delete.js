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

    /* db.collection('Todos').deleteMany({
        test: 'eat lunch'
    }).then((result) => {
        console.log(result);
    }); */

    /* db.collection('Todos').deleteOne({
        text: 'Eat lunch'
    }).then((result) => {
        console.log(result);
    }); */

    /* db.collection('Todos').findOneAndDelete({
        completed: false
    }).then((result) => {
        console.log(result);
    }); */

    db.collection('Users').deleteMany({
        name: 'Teste'
    });

    db.collection('Users').findOneAndDelete({
        _id: new ObjectID('5b60f844e4c1c8239634a458')
    }).then((result) => {
        console.log(JSON.stringify(result, undefined, 2));
    });

    //db.close();
});