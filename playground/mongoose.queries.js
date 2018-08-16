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

var id = '5b75f8697651744c673ca337';

var idUser = '5b75fde0f677c13f2e4a6636';

/* if (!ObjectId.isValid(id)) {
    console.log('Id not valid');
} */

/* Todo.find({
    _id: id
}).then((todos) => {
    console.log('Todos', todos);
});

Todo.findOne({
    _id: id
}).then((todo) => {
    console.log('Todo', todo);
}); */

/* Todo.findById(id).then((todo) => {

    if (!todo) return console.log('Id not Found');

    console.log('Todo By id', todo);
}).catch((e) => console.log(e)); */

User.findById(idUser).then((user) => {

    if (!user) return console.log('Id not Found');

    console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
    console.log(e);
});