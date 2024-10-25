const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userName: String,
    dateOfBirth: Date,
    address: String,
    userEmail: String,
    phone: String,
    designation: String,
    organization: String,
    password: String,
    role: String
});

module.exports = mongoose.model('User', userSchema);
