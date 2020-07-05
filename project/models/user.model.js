const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    avatar: String,
    firstName: String,
    lastName: String,
    dob: Date,
    gender: String,
    country: String,
    phoneNumber: Number,
    zipcode: Number,
    username: String,
    email: String,
    emailVerified: Boolean,
    role: String
})

const User = mongoose.model('User', userSchema, 'users');

module.exports = User;