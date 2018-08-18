const {
    ObjectId
} = require('mongodb');

const {
    mongoose
} = require('./../server/db/mongoose');
const {
    Todo
} = require('./../server/models/todo');

const {
    User
} = require('./../server/models/user');

/* Todo.remove({}).then((result) => {
    console.log(result);
}) */

//Todo.findOneAndRemove({})

//Todo.findByIdAndRemove({})

Todo.findByIdAndRemove('5b75fe8444c6e2cb6b021ab0').then((todo) => {
    console.log(todo);
});