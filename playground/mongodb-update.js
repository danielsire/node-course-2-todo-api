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

    /* db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID('5b624b05f677c13f2e4a1af0')
    }, {
        $set: {
            completed: true
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result)
    }); */

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5b60eee2fcd8dd1c2c082c14')
    }, {
        $set: {
            name: 'Fulano'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result)
    });

    //db.close();
});