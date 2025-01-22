// const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema({
//     userName: String,
//     userEmail: String,
//     password: String,

//     role: String
// });

// module.exports = mongoose.model('User', userSchema);


const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userName: String,
    userEmail: String,
    password: String,
    // title:String,
    // phoneNumber:Number,
    
    role: String
});

module.exports = mongoose.model('User', userSchema);
