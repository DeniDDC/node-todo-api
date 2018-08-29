var mongoose = require('mongoose');
var User = mongoose.model('User',{
    email : {
        type: String,
        required: true,
        minlength : 1,
        trim: true
    }
});

// var user = new User({
//     email: "myEmail"
// });

// user.save().then((doc)=>{
//     console.log('user saved',doc);
// },(e)=>{
//     console.log('Unable to save', e);
// });

module.exports = {User};