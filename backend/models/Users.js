const mongoose = require('mongoose');
// mongoose.set('debug', true);

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    username: {
        type: String,
        required: true
    },
});

const UserModel = mongoose.model("users", UserSchema);
module.exports = UserModel; 