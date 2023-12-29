const mongoose = require('mongoose');
const DB = require('../connection').init();

const Schema = mongoose.Schema;
const UserSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        minlength: 3
    },
    password: {
        type: String,
        required: true,
        minlength: 5
    }
});

module.exports = DB.model('users', UserSchema);