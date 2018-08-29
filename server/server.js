//var mongoose = require ('mongoose');
var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require ('./db/mongoose');
var {Todo}= require('./model/todo');
var {User}= require('./model/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req,res)=>{
    //console.log(req.body);
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc)=>{
        res.send(doc);
    }, (e)=>{
        res.status(400).send(e);
    });
    
});





app.listen(3000,()=>{
    console.log('started at 3000');
});

//GET /todos/1238324

// mongoose.Promise - global.Promise;
// mongoose.connect('mongodb://localhost:27017/TodoApp');

//save new something

// var Todo = mongoose.model('Todo',{
//     text : {
//         type: String,
//         required: true,
//         minlength : 1,
//         trim: true
//     },
//     completed : {
//         type : Boolean,
//         default : false
//     },
//     completedAt : {
//         type: Number,
//         default: null
//     }
// });

// var newTodo = new Todo({
//     text : 'Cook Dinner'
// });

// newTodo.save().then((doc)=>{
//     console.log('saved todo', doc);
// },(e)=>{
//     console.log('unable to save todo');
// });

// var otherTodo = new Todo({
//     text : true,
//     completed : true,
//     completedAt : 123
// });

// otherTodo.save().then((doc)=>{
//     console.log(JSON.stringify(doc, undefined, 2));
// },(e)=>{
//     console.log('Unable to save', e);
// });


// var User = mongoose.model('User',{
//     email : {
//         type: String,
//         required: true,
//         minlength : 1,
//         trim: true
//     }
// });

// var user = new User({
//     email: "myEmail"
// });

// user.save().then((doc)=>{
//     console.log('user saved',doc);
// },(e)=>{
//     console.log('Unable to save', e);
// });