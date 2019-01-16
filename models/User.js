const mongoose = require('mongoose');

const UserSchema = new Schema ({
    username: String,
    email: String
})

module.exports = mongoose.model('User', UserSchema)