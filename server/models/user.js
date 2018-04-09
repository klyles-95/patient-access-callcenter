const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const UserSchema = new mongoose.Schema({
    username: String,
    firstname: String,
    lastname: String,
    email: String,
    password: String,
});

const User = mongoose.model('User', UserSchema)

module.exports = User